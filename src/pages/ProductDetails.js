import React, { useState, useEffect } from 'react';
// 1. ADDED 'Message' TO THIS IMPORT LIST
import { Container, Grid, Image, Header, Button, Icon, Segment, Label, Tab, Rating, Breadcrumb, Divider, Message } from 'semantic-ui-react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const DEFAULT_IMG = 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop';

const ProductDetails = () => {
  const { id } = useParams(); 
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products') 
      .then((response) => {
        // Ensure we compare strings to strings just in case
        const found = response.data.find(p => p.product_id.toString() === id.toString());
        setProduct(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div style={{ padding: '5em', textAlign: 'center' }}>Loading Details...</div>;
  if (!product) return <div style={{ padding: '5em', textAlign: 'center' }}>Product Not Found</div>;

  const panes = [
    { menuItem: 'Description', render: () => <Tab.Pane>{product.description || "No description available for this premium product."}</Tab.Pane> },
    { menuItem: 'Ingredients / Specs', render: () => <Tab.Pane>100% Organic, Veterinarian Approved, Safe Materials.</Tab.Pane> },
    { menuItem: 'Reviews (12)', render: () => <Tab.Pane><p>⭐⭐⭐⭐⭐ "My dog loves this!" - Sarah J.</p><p>⭐⭐⭐⭐ "Great quality." - Mike T.</p></Tab.Pane> },
  ];

  return (
    <div style={{ marginTop: '5em', marginBottom: '4em', minHeight: '80vh' }}>
      <Container>
        
        {/* BREADCRUMB */}
        <Breadcrumb size='large' style={{ marginBottom: '2em' }}>
            <Breadcrumb.Section link as={Link} to="/">Home</Breadcrumb.Section>
            <Breadcrumb.Divider icon='right chevron' />
            <Breadcrumb.Section link as={Link} to="/shop">Shop</Breadcrumb.Section>
            <Breadcrumb.Divider icon='right chevron' />
            <Breadcrumb.Section active>{product.name}</Breadcrumb.Section>
        </Breadcrumb>

        <Segment raised style={{ padding: '3em' }}>
            <Grid stackable columns={2}>
                <Grid.Row>
                    
                    {/* LEFT: IMAGE */}
                    <Grid.Column width={7}>
                        <Image 
                            src={DEFAULT_IMG} 
                            rounded 
                            bordered 
                            fluid 
                            label={{ as: 'a', color: 'teal', content: 'Best Seller', icon: 'star', ribbon: true }}
                        />
                    </Grid.Column>

                    {/* RIGHT: DETAILS */}
                    <Grid.Column width={9}>
                        <Header as='h1' style={{ fontSize: '2.5em', marginBottom: '0.2em' }}>
                            {product.name}
                        </Header>
                        <p style={{ color: '#888', fontSize: '1.2em' }}>Category: {product.category || 'General'}</p>
                        
                        <Rating icon='star' defaultRating={5} maxRating={5} disabled size='huge' />
                        <span style={{ marginLeft: '10px', color: '#666' }}>(Based on 24 reviews)</span>

                        <Header as='h2' color='teal' style={{ fontSize: '2.5em', marginTop: '1em' }}>
                            ${product.price}
                        </Header>
                        
                        <p style={{ fontSize: '1.2em', lineHeight: '1.6', marginTop: '1.5em' }}>
                            {product.description || "Treat your pet to the absolute best. This product is crafted with care, ensuring safety, durability, and maximum tail-wagging happiness."}
                        </p>

                        <Divider section />

                        <div style={{ display: 'flex', gap: '15px' }}>
                            <Button 
                                color='orange' 
                                size='huge' 
                                icon 
                                labelPosition='left'
                                onClick={() => { addToCart(product); alert("Added to Cart!"); }}
                            >
                                <Icon name='cart plus' />
                                Add to Cart
                            </Button>
                            <Button basic size='huge' icon='heart' />
                        </div>
                        
                        {/* THIS IS THE COMPONENT THAT WAS MISSING FROM IMPORTS */}
                        <Message info style={{ marginTop: '2em' }}>
                            <Icon name='shipping fast' />
                            <strong>Free Shipping</strong> on orders over $50. Order today, receive it tomorrow!
                        </Message>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            {/* BOTTOM: TABS */}
            <div style={{ marginTop: '4em' }}>
                <Tab panes={panes} />
            </div>
        </Segment>
      </Container>
    </div>
  );
};

export default ProductDetails;