import React, { useState, useEffect } from 'react';
import { Container, Header, Grid, Card, Image, Icon, Button, Input, Segment, Dimmer, Loader, Checkbox, Divider, Rating, Message } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const DEFAULT_PRODUCT_IMG = 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop';

// --- 1. NEW SLIDER DATA (Bright, Distinct Images) ---
const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format&fit=crop',
    title: 'New Arrivals Collection',
    subtitle: 'Upgrade your pet\'s lifestyle with our latest premium accessories.'
  },
  {
    // New Image: Bright Cat Photo
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
    title: 'Purr-fect Treats',
    subtitle: 'Delicious and organic snacks for your feline friends.'
  },
  {
    // New Image: Happy Dog with Shopping Bags/Bright background
    image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=1000&auto=format&fit=crop',
    title: 'Summer Sale Event',
    subtitle: 'Huge discounts on toys, grooming kits, and beds!'
  }
];

const QUOTES_POOL = [
  { icon: 'heart', color: 'red', title: 'Did You Know?', text: "Regular grooming isn't just about looking good—it helps you spot health issues early!" },
  { icon: 'paw', color: 'orange', title: 'Adopt, Don\'t Shop', text: "Saving one dog will not change the world, but surely for that one dog, the world will change forever." },
  { icon: 'sun', color: 'yellow', title: 'Summer Tip', text: "Never leave your pet in a parked car. Temperatures can rise to dangerous levels in minutes." },
  { icon: 'tint', color: 'blue', title: 'Hydration Matters', text: "Cats often prefer running water. Consider a water fountain to encourage them to drink more!" },
  { icon: 'tree', color: 'green', title: 'Walk Daily', text: "A tired dog is a good dog. Daily walks reduce anxiety and destructive behavior." },
  { icon: 'medkit', color: 'teal', title: 'Checkups', text: "Pets age faster than us. An annual vet checkup is crucial for catching hidden problems." },
  { icon: 'lightbulb', color: 'purple', title: 'Mental Health', text: "Puzzle toys aren't just fun—they keep your pet's brain sharp and prevent boredom." },
  { icon: 'utensils', color: 'brown', title: 'Nutrition Fact', text: "Obesity is the #1 health problem in pets. Measure their food and limit treats!" }
];

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // --- STATE FOR FILTERS ---
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState(''); // State for Minimum Price
  const [maxPrice, setMaxPrice] = useState(''); // State for Maximum Price
  
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

  // --- UPDATED FILTER LOGIC ---
  const filteredProducts = products.filter(product => {
    // 1. Search Name Filter
    const matchesSearch = product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // 2. Price Filter Logic
    // We convert strings to floats. If input is empty (''), we ignore that limit.
    const price = parseFloat(product.price);
    const matchesMin = minPrice !== '' ? price >= parseFloat(minPrice) : true;
    const matchesMax = maxPrice !== '' ? price <= parseFloat(maxPrice) : true;

    return matchesSearch && matchesMin && matchesMax;
  });

  return (
    <div style={{ marginTop: '5em', marginBottom: '4em', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      
      {/* SLIDER SECTION */}
      <Segment 
        inverted 
        vertical 
        style={{ 
          padding: '8em 0em', 
          marginBottom: '3em',
          position: 'relative',
          transition: 'background-image 0.5s ease-in-out',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${SLIDES[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '450px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Icon name='angle left' size='huge' style={{ position: 'absolute', left: '20px', cursor: 'pointer', color: 'white', zIndex: 10 }} onClick={prevSlide} />
        <Container textAlign='center'>
          <Header as='h1' inverted style={{ fontSize: '4em', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            {SLIDES[currentSlide].title}
            <Header.Subheader style={{ color: '#f0f0f0', fontSize: '0.5em', marginTop: '10px' }}>
              {SLIDES[currentSlide].subtitle}
            </Header.Subheader>
          </Header>
          <Button color='blue' size='huge' style={{ marginTop: '1em' }}>Explore Now</Button>
        </Container>
        <Icon name='angle right' size='huge' style={{ position: 'absolute', right: '20px', cursor: 'pointer', color: 'white', zIndex: 10 }} onClick={nextSlide} />
        
        <div style={{ position: 'absolute', bottom: '20px', display: 'flex', gap: '10px' }}>
            {SLIDES.map((_, index) => (
                <div key={index} onClick={() => setCurrentSlide(index)} style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: index === currentSlide ? 'white' : 'rgba(255,255,255,0.5)', cursor: 'pointer' }} />
            ))}
        </div>
      </Segment>

      <Container>
        <Grid stackable>
          
          {/* LEFT SIDEBAR FILTERS */}
          <Grid.Column width={5}>
            <Segment raised color='teal'>
              <Header as='h3' color='teal'><Icon name='filter' /> Filter Products</Header>
              
              {/* Name Search */}
              <Input 
                fluid size='large' icon='search' placeholder='Search Name...' 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
                style={{ marginBottom: '1.5em' }} 
              />
              
              {/* Category Checkboxes (Visual for now unless your DB has category column) */}
              <Divider horizontal>Categories</Divider>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '1.1em' }}>
                <Checkbox label='Dog Food & Treats' />
                <Checkbox label='Cat Toys & Scratchers' />
                <Checkbox label='Pet Accessories' />
                <Checkbox label='Health & Grooming' />
              </div>

              {/* Price Range Inputs - NOW FUNCTIONAL */}
              <Divider horizontal>Price Range</Divider>
              <Grid>
                <Grid.Row columns={2}>
                   <Grid.Column>
                     <Input 
                        label='$' type='number' placeholder='Min' fluid 
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                     />
                   </Grid.Column>
                   <Grid.Column>
                     <Input 
                        label='$' type='number' placeholder='Max' fluid 
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                     />
                   </Grid.Column>
                </Grid.Row>
              </Grid>
              
              {/* Clear Filters Button */}
              <Button 
                basic color='red' fluid size='large' style={{ marginTop: '1.5em' }}
                onClick={() => { setSearchTerm(''); setMinPrice(''); setMaxPrice(''); }}
              >
                Clear Filters
              </Button>
            </Segment>

            {/* QUOTES LIST */}
            {QUOTES_POOL.map((quote, index) => (
              <Message key={index} color={quote.color} style={{ marginTop: '1.5em', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <Icon name={quote.icon} size='large' />
                <Message.Header>{quote.title}</Message.Header>
                <p style={{ fontStyle: 'italic', marginTop: '0.5em' }}>"{quote.text}"</p>
              </Message>
            ))}
          </Grid.Column>

          {/* RIGHT CONTENT */}
          <Grid.Column width={11}>
            <Segment basic style={{ padding: 0, marginBottom: '2em' }}>
                 <Message attached='top' color='blue'>
                    <Icon name='info circle' />
                    <strong>Pet Care Tip:</strong> Always ensure your pet has access to fresh water, especially after playtime!
                 </Message>
            </Segment>

            {loading ? (
               <Segment style={{ height: '300px' }}><Dimmer active inverted><Loader size='large'>Fetching Products...</Loader></Dimmer></Segment>
            ) : (
              <Grid columns={3} stackable doubling>
                {/* Check if filter returned empty */}
                {filteredProducts.length === 0 && (
                    <div style={{ width: '100%', textAlign: 'center', padding: '2em' }}>
                        <Header as='h3' icon disabled>
                            <Icon name='search' />
                            No products found matching your filters.
                        </Header>
                    </div>
                )}

                {filteredProducts.map((product) => (
                  <Grid.Column key={product.product_id}> 
                    <Card centered fluid className="product-card">
                      <Image 
                        src={DEFAULT_PRODUCT_IMG} 
                        wrapped ui={false} height="200px" style={{ objectFit: 'cover' }} 
                        label={product.stock < 5 && product.stock > 0 ? { as: 'a', color: 'orange', content: 'Low Stock', icon: 'exclamation', ribbon: true } : product.stock === 0 ? { as: 'a', color: 'red', content: 'Sold Out', icon: 'ban', ribbon: true } : null}
                      />
                      <Card.Content>
                        <Card.Header as='h4'>{product.name}</Card.Header>
                        <Card.Meta><span className='date'>{product.status || 'General'}</span></Card.Meta>
                        <Card.Description><Rating icon='star' defaultRating={4} maxRating={5} disabled size='mini' /><span style={{ fontSize: '0.8em', marginLeft: '5px', color: '#999' }}>(12)</span></Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Header as='h3' color='teal' style={{ margin: 0 }}>${product.price}</Header>
                            <div>
                                <Button 
                                    size='tiny' color='orange' icon style={{ marginRight: '5px' }}
                                    onClick={() => { addToCart(product); alert(product.name + " added to Cart!"); }}
                                >
                                    <Icon name='cart plus' />
                                </Button>
                                <Button size='tiny' basic color='teal' icon as={Link} to={`/details/${product.product_id}`}><Icon name='eye' /></Button>
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