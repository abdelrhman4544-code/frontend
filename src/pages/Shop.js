import React, { useState, useEffect } from 'react';
import { Container, Header, Grid, Card, Image, Icon, Button, Input, Segment, Dimmer, Loader, Checkbox, Divider, Rating, Message, Label } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const DEFAULT_PRODUCT_IMG = 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop';

// --- SLIDER DATA ---
const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format&fit=crop',
    title: 'THE LUXURY EDIT',
    subtitle: 'Premium accessories for the distinguished pet.'
  },
  {
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
    title: 'ORGANIC FEAST',
    subtitle: '100% Grain-free nutrition for optimal health.'
  },
  {
    image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=1000&auto=format&fit=crop',
    title: 'PLAY TIME REDEFINED',
    subtitle: 'Durable toys designed for hours of engagement.'
  }
];

// --- RESTORED ALL TIPS (THE KNOWLEDGE BASE) ---
const QUOTES_POOL = [
  { icon: 'heart', color: 'red', title: 'Wellness Tip', text: "Regular grooming isn't just about looks—it helps you spot health issues early!" },
  { icon: 'sun', color: 'yellow', title: 'Summer Care', text: "Hot pavement burns paws. Test it with your hand for 5 seconds first!" },
  { icon: 'tint', color: 'blue', title: 'Hydration', text: "Cats prefer running water. A fountain can prevent kidney issues." },
  { icon: 'paw', color: 'orange', title: 'Adoption', text: "Saving one dog won't change the world, but the world changes for that dog." },
  { icon: 'tree', color: 'green', title: 'Routine', text: "Daily walks reduce anxiety and destructive behavior in dogs." },
  { icon: 'medkit', color: 'teal', title: 'Checkups', text: "Pets age faster than us. An annual vet checkup is crucial." },
  { icon: 'lightbulb', color: 'purple', title: 'Brain Power', text: "Puzzle toys keep your pet's brain sharp and prevent boredom." },
  { icon: 'utensils', color: 'brown', title: 'Diet', text: "Obesity is the #1 health problem. Measure food and limit treats!" }
];

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // FILTERS
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState(''); 
  const [maxPrice, setMaxPrice] = useState(''); 
  
  const { addToCart } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => setCurrentSlide(currentSlide === SLIDES.length - 1 ? 0 : currentSlide + 1);
  const prevSlide = () => setCurrentSlide(currentSlide === 0 ? SLIDES.length - 1 : currentSlide - 1);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products') 
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // FILTER LOGIC
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const price = parseFloat(product.price);
    const matchesMin = minPrice !== '' ? price >= parseFloat(minPrice) : true;
    const matchesMax = maxPrice !== '' ? price <= parseFloat(maxPrice) : true;
    return matchesSearch && matchesMin && matchesMax;
  });

  return (
    <div style={{ marginTop: '0', backgroundColor: '#fff', minHeight: '100vh' }}>
      
      {/* 1. CINEMATIC HEADER (Glass Effect) */}
      <div style={{ 
        position: 'relative',
        height: '60vh', 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${SLIDES[currentSlide].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.7s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '4em'
      }}>
        {/* Navigation Arrows */}
        <Icon name='angle left' size='huge' style={{ position: 'absolute', left: '30px', cursor: 'pointer', color: 'rgba(255,255,255,0.8)', zIndex: 10 }} onClick={prevSlide} />
        <Icon name='angle right' size='huge' style={{ position: 'absolute', right: '30px', cursor: 'pointer', color: 'rgba(255,255,255,0.8)', zIndex: 10 }} onClick={nextSlide} />

        {/* Glass Box Content */}
        <Container text textAlign='center'>
            <div style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                backdropFilter: 'blur(15px)', 
                padding: '3em', 
                borderRadius: '15px',
                border: '1px solid rgba(255,255,255,0.3)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
            }}>
                <Header as='h1' inverted style={{ fontSize: '3.5em', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.2em' }}>
                    {SLIDES[currentSlide].title}
                </Header>
                <p style={{ color: '#eee', fontSize: '1.2em', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                    {SLIDES[currentSlide].subtitle}
                </p>
                <Button color='orange' inverted size='large' style={{ marginTop: '1em' }}>View Collection</Button>
            </div>
        </Container>

        {/* Slide Dots */}
        <div style={{ position: 'absolute', bottom: '30px', display: 'flex', gap: '15px' }}>
            {SLIDES.map((_, index) => (
                <div key={index} onClick={() => setCurrentSlide(index)} style={{ 
                    width: '12px', height: '12px', borderRadius: '50%', 
                    backgroundColor: index === currentSlide ? 'white' : 'rgba(255,255,255,0.4)', 
                    cursor: 'pointer', transition: 'all 0.3s' 
                }} />
            ))}
        </div>
      </div>

      <Container>
        <Grid stackable>
          
          {/* 2. STICKY SIDEBAR FILTERS & TIPS */}
          <Grid.Column width={4}>
            <div style={{ position: 'sticky', top: '100px' }}>
                
                {/* FILTER BOX */}
                <Segment basic style={{ padding: 0 }}>
                    <Header as='h3' style={{ fontSize: '1.2em', textTransform: 'uppercase', letterSpacing: '1px', color: '#888' }}>
                        Refine Selection
                    </Header>
                    <Divider />
                    
                    <Header as='h4'>Search</Header>
                    <Input 
                        fluid icon='search' placeholder='Product name...' 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        style={{ marginBottom: '1.5em' }} 
                        transparent
                        className="beast-input"
                    />
                    
                    <Header as='h4'>Categories</Header>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#555' }}>
                        <Checkbox label='Premium Food' />
                        <Checkbox label='Interactive Toys' />
                        <Checkbox label='Luxury Beds' />
                        <Checkbox label='Grooming' />
                    </div>

                    <Divider />
                    <Header as='h4'>Price Range</Header>
                    <Grid>
                        <Grid.Row columns={2}>
                        <Grid.Column><Input placeholder='Min' fluid type='number' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} /></Grid.Column>
                        <Grid.Column><Input placeholder='Max' fluid type='number' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} /></Grid.Column>
                        </Grid.Row>
                    </Grid>
                    
                    <Button 
                        basic color='black' fluid style={{ marginTop: '2em' }}
                        onClick={() => { setSearchTerm(''); setMinPrice(''); setMaxPrice(''); }}
                    >
                        Reset All
                    </Button>
                </Segment>

                <Divider section />

                {/* --- NEW: SCROLLABLE WELLNESS FEED --- */}
                <Header as='h4' color='teal'>
                    <Icon name='rss' /> Wellness Feed
                </Header>
                <div style={{ 
                    maxHeight: '400px', 
                    overflowY: 'auto', 
                    paddingRight: '10px',
                    // Hides scrollbar for cleaner look in Chrome/Safari
                    scrollbarWidth: 'thin' 
                }}>
                    {QUOTES_POOL.map((quote, index) => (
                        <Message key={index} size='small' style={{ 
                            marginBottom: '1em', 
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                            borderLeft: `3px solid ${quote.color}` // Nice colored accent
                        }}>
                            <Header as='h5' style={{ margin: 0, color: '#333' }}>
                                <Icon name={quote.icon} style={{ color: quote.color }} />
                                {quote.title}
                            </Header>
                            <p style={{ fontSize: '0.85em', color: '#666', marginTop: '5px' }}>{quote.text}</p>
                        </Message>
                    ))}
                </div>
                {/* ------------------------------------- */}

            </div>
          </Grid.Column>

          {/* 3. PRODUCT GRID */}
          <Grid.Column width={12}>
            
            {/* Header Area */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2em' }}>
                <Header as='h2' style={{ margin: 0 }}>
                    All Products
                    <Label circular color='teal' style={{ marginLeft: '10px', verticalAlign: 'middle' }}>
                        {filteredProducts.length}
                    </Label>
                </Header>
                <span style={{ color: '#888' }}>Sorted by: <strong>Relevance</strong> <Icon name='dropdown' /></span>
            </div>

            {loading ? (
               <Segment style={{ height: '400px', border: 'none', boxShadow: 'none' }}><Dimmer active inverted><Loader size='large'>Loading Inventory...</Loader></Dimmer></Segment>
            ) : (
              <Grid columns={3} stackable doubling>
                
                {filteredProducts.length === 0 && (
                    <div style={{ width: '100%', textAlign: 'center', padding: '4em' }}>
                        <Icon name='search' size='huge' disabled />
                        <Header as='h3' disabled>No matches found.</Header>
                        <Button basic color='teal' onClick={() => { setSearchTerm(''); setMinPrice(''); setMaxPrice(''); }}>Clear Filters</Button>
                    </div>
                )}

                {filteredProducts.map((product) => (
                  <Grid.Column key={product.product_id}> 
                    <Card fluid style={{ 
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)', 
                        border: 'none', 
                        borderRadius: '12px',
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease'
                    }}>
                      
                      {/* Image Area */}
                      <div style={{ position: 'relative', height: '240px' }}>
                          <Image src={DEFAULT_PRODUCT_IMG} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          {product.stock === 0 && <Label color='red' ribbon style={{ position: 'absolute', top: 10, left: -14 }}>SOLD OUT</Label>}
                          {product.stock < 5 && product.stock > 0 && <Label color='orange' ribbon style={{ position: 'absolute', top: 10, left: -14 }}>LOW STOCK</Label>}
                          {product.price < 20 && <Label color='green' corner='right' icon='dollar' />}
                      </div>

                      <Card.Content style={{ borderTop: 'none' }}>
                        <Card.Header as='h3' style={{ fontSize: '1.3em', marginBottom: '5px' }}>{product.name}</Card.Header>
                        <Card.Meta style={{ color: '#aaa', textTransform: 'uppercase', fontSize: '0.8em' }}>{product.category || 'Premium Collection'}</Card.Meta>
                        
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <Rating icon='star' defaultRating={5} maxRating={5} disabled size='tiny' />
                            <span style={{ fontSize: '0.8em', color: '#ccc', marginLeft: '5px' }}>(24)</span>
                        </div>
                      </Card.Content>

                      <Card.Content extra style={{ borderTop: '1px solid #f6f6f6', backgroundColor: '#fff', padding: '1.2em' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Header as='h3' style={{ margin: 0, color: '#333' }}>${product.price}</Header>
                            <div>
                                <Button circular icon='eye' basic color='grey' as={Link} to={`/details/${product.product_id}`} />
                                <Button 
                                    circular icon='shopping bag' color='black' 
                                    onClick={() => { addToCart(product); alert("Added to Cart!"); }}
                                    disabled={product.stock === 0}
                                />
                            </div>
                        </div>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                ))}
              </Grid>
            )}
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default Shop;