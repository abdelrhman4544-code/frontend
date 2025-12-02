import React, { useState, useEffect } from 'react';
import { Container, Header, Grid, Card, Image, Icon, Button, Input, Segment, Dimmer, Loader, Checkbox, Divider, Rating, Message } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // <--- 1. IMPORT CART HOOK

const DEFAULT_PRODUCT_IMG = 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop';

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
  const [searchTerm, setSearchTerm] = useState('');
  
  // --- 2. USE CART HOOK ---
  const { addToCart } = useCart(); 

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

  const filteredProducts = products.filter(product => 
    product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ marginTop: '5em', marginBottom: '4em', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      
      {/* HEADER BANNER */}
      <Segment 
        inverted 
        vertical 
        style={{ 
          padding: '3em 0em', 
          marginBottom: '3em',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Container textAlign='center'>
          <Header as='h1' inverted style={{ fontSize: '3em' }}>
            Our Collection
            <Header.Subheader style={{ color: '#ddd' }}>
              Everything your pet needs, from nutrition to playtime.
            </Header.Subheader>
          </Header>
        </Container>
      </Segment>

      <Container>
        <Grid stackable>
          
          {/* LEFT SIDEBAR */}
          <Grid.Column width={5}>
            <Segment raised color='teal'>
              <Header as='h3' color='teal'><Icon name='filter' /> Filter Products</Header>
              <Input fluid size='large' icon='search' placeholder='Search...' onChange={(e) => setSearchTerm(e.target.value)} style={{ marginBottom: '1.5em' }} />
              <Divider horizontal>Categories</Divider>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '1.1em' }}>
                <Checkbox label='Dog Food & Treats' />
                <Checkbox label='Cat Toys & Scratchers' />
                <Checkbox label='Pet Accessories' />
                <Checkbox label='Health & Grooming' />
              </div>
              <Divider horizontal>Price</Divider>
              <Grid><Grid.Row columns={2}><Grid.Column><Input label='$' type='number' placeholder='Min' fluid /></Grid.Column><Grid.Column><Input label='$' type='number' placeholder='Max' fluid /></Grid.Column></Grid.Row></Grid>
              <Button color='teal' fluid size='large' style={{ marginTop: '1.5em' }}>Apply Filters</Button>
            </Segment>

            {/* QUOTES SECTION */}
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
                            
                            {/* --- 3. ADD TO CART BUTTON (Next to Details) --- */}
                            <div>
                                <Button 
                                    size='tiny' 
                                    color='orange' 
                                    icon 
                                    style={{ marginRight: '5px' }}
                                    onClick={() => {
                                        addToCart(product);
                                        // Optional: Small alert to confirm
                                        alert(product.name + " added to Cart!");
                                    }}
                                >
                                    <Icon name='cart plus' />
                                </Button>
                                <Button size='tiny' basic color='teal' icon as={Link} to={`/details/${product.product_id}`}>
                                    <Icon name='eye' />
                                </Button>
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