import React, { useState } from 'react';
import { Container, Header, Segment, Button, Icon, Grid, Image, Divider, Input, Label, Message, Checkbox, Card, Step } from 'semantic-ui-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const DEFAULT_IMG = 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop';

// MOCK UPSELL DATA
const UPSELL_ITEMS = [
    { id: 99, name: 'Eco Poop Bags', price: 4.99, img: 'https://images.unsplash.com/photo-1597843786411-a798ee7d2106?q=80&w=200&auto=format&fit=crop' },
    { id: 98, name: 'Dental Chew Stick', price: 2.50, img: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=200&auto=format&fit=crop' },
    { id: 97, name: 'Catnip Mouse', price: 3.99, img: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=200&auto=format&fit=crop' },
];

const Cart = () => {
  const { cartItems, removeFromCart, getCartTotal } = useCart();
  const [promo, setPromo] = useState('');

  const subtotal = getCartTotal();
  const shippingCost = subtotal > 50 ? 0 : 10;
  const total = subtotal + shippingCost;
  const progressToFreeShipping = Math.min((subtotal / 50) * 100, 100);

  return (
    <div style={{ marginTop: '0', backgroundColor: '#f0f2f5', minHeight: '100vh', paddingBottom: '6em' }}>
      
      {/* 1. PROGRESS STEPPER (RESTORED) */}
      <div style={{ backgroundColor: 'white', padding: '3em 0 2em 0', borderBottom: '1px solid #ddd', marginTop: '4em', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <Container>
            {/* The Stepper */}
            <Step.Group size='mini' fluid style={{ border: 'none', boxShadow: 'none', marginBottom: '1em' }}>
                <Step active>
                    <Icon name='shopping bag' color='teal' />
                    <Step.Content>
                        <Step.Title>Bag</Step.Title>
                        <Step.Description>Review items</Step.Description>
                    </Step.Content>
                </Step>
                <Step disabled>
                    <Icon name='truck' />
                    <Step.Content>
                        <Step.Title>Shipping</Step.Title>
                        <Step.Description>Address info</Step.Description>
                    </Step.Content>
                </Step>
                <Step disabled>
                    <Icon name='credit card' />
                    <Step.Content>
                        <Step.Title>Payment</Step.Title>
                        <Step.Description>Secure checkout</Step.Description>
                    </Step.Content>
                </Step>
            </Step.Group>

            {/* Header Text */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1em' }}>
                <Header as='h2' style={{ margin: 0 }}>SHOPPING CART ({cartItems.length})</Header>
                <div style={{ color: '#666', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                    <Icon name='lock' color='green' /> Secure SSL Encrypted
                </div>
            </div>
        </Container>
      </div>

      <Container style={{ marginTop: '2em' }}>
        {cartItems.length === 0 ? (
          // EMPTY STATE
          <Segment placeholder textAlign='center' style={{ padding: '8em', borderRadius: '10px' }}>
            <Icon name='shopping basket' size='huge' color='grey' />
            <Header as='h2'>Your bag is empty.</Header>
            <Button color='black' size='large' as={Link} to="/shop">Start Shopping</Button>
          </Segment>
        ) : (
          <Grid stackable columns={2}>
            
            {/* --- LEFT COLUMN: ITEMS & UPSELLS --- */}
            <Grid.Column width={11}>
              
              {/* SHIPPING BAR */}
              <Segment style={{ borderRadius: '10px', border: 'none', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '0.9em', fontWeight: 'bold' }}>
                    <span>{subtotal >= 50 ? "🎉 FREE Shipping Unlocked!" : `Add $${(50 - subtotal).toFixed(2)} for FREE Shipping`}</span>
                    <span>{Math.round(progressToFreeShipping)}%</span>
                 </div>
                 <div style={{ width: '100%', height: '6px', backgroundColor: '#eee', borderRadius: '3px' }}>
                     <div style={{ width: `${progressToFreeShipping}%`, height: '100%', backgroundColor: '#21ba45', borderRadius: '3px', transition: 'width 0.5s ease' }}></div>
                 </div>
              </Segment>

              {/* CART ITEMS LIST */}
              <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', overflow: 'hidden', marginBottom: '2em' }}>
                  {cartItems.map((item, index) => (
                    <div key={item.product_id} style={{ 
                        padding: '1.5em', 
                        borderBottom: '1px solid #eee', 
                        display: 'flex', 
                        alignItems: 'flex-start',
                        backgroundColor: index % 2 === 0 ? '#fff' : '#fafafa'
                    }}>
                       <Image src={DEFAULT_IMG} rounded style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '20px' }} />
                       
                       <div style={{ flex: 1 }}>
                           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Header as='h3' style={{ margin: 0 }}>{item.name}</Header>
                                <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>${(item.price * item.quantity).toFixed(2)}</span>
                           </div>
                           <p style={{ color: '#888', margin: '5px 0' }}>Category: {item.category || 'General'}</p>
                           <Label color='green' size='tiny' horizontal>In Stock</Label>
                           <Label size='tiny' horizontal>Ships Tomorrow</Label>

                           <div style={{ marginTop: '1em', display: 'flex', alignItems: 'center', gap: '15px' }}>
                               <Label basic>Qty: {item.quantity}</Label>
                               <span style={{ color: '#aaa', fontSize: '0.9em', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => removeFromCart(item.product_id)}>Remove</span>
                               <span style={{ color: '#aaa', fontSize: '0.9em', cursor: 'pointer', textDecoration: 'underline' }}>Save for Later</span>
                           </div>
                       </div>
                    </div>
                  ))}
                  <div style={{ padding: '1em', backgroundColor: '#f9f9f9', textAlign: 'right' }}>
                      <Checkbox label='This is a gift (Add receipt hidden)' slider />
                  </div>
              </div>

              {/* UPSELL SECTION */}
              <Header as='h4' dividing>Don't Forget These Essentials</Header>
              <Grid columns={3}>
                  {UPSELL_ITEMS.map(item => (
                      <Grid.Column key={item.id}>
                          <Card fluid>
                              <div style={{ display: 'flex', padding: '10px' }}>
                                  <Image src={item.img} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '5px' }} />
                                  <div style={{ marginLeft: '10px' }}>
                                      <div style={{ fontWeight: 'bold', fontSize: '0.9em' }}>{item.name}</div>
                                      <div style={{ color: 'teal', fontWeight: 'bold' }}>${item.price}</div>
                                      <Button size='mini' icon='plus' basic color='blue' style={{ marginTop: '5px' }} content='Add' />
                                  </div>
                              </div>
                          </Card>
                      </Grid.Column>
                  ))}
              </Grid>

            </Grid.Column>

            {/* --- RIGHT COLUMN: SUMMARY & TRUST --- */}
            <Grid.Column width={5}>
              <div style={{ position: 'sticky', top: '20px' }}>
                
                {/* BLACK SUMMARY CARD */}
                <div style={{ 
                    backgroundColor: '#1b1c1d', color: 'white', borderRadius: '15px', padding: '2em', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' 
                }}>
                    <Header as='h3' inverted>Order Summary</Header>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#ccc' }}>
                        <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#ccc' }}>
                        <span>Shipping</span><span>{shippingCost === 0 ? 'FREE' : `$${shippingCost}`}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', color: '#ccc' }}>
                        <span>Tax</span><span>$0.00</span>
                    </div>
                    <Divider inverted />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '1.3em', fontWeight: 'bold' }}>
                        <span>Total</span><span>${total.toFixed(2)}</span>
                    </div>

                    <Button fluid color='orange' size='large' style={{ marginBottom: '1em' }}>
                        PROCEED TO CHECKOUT
                    </Button>

                    <Input inverted fluid transparent placeholder='Promo Code' icon='tags' style={{ borderBottom: '1px solid #555' }} />
                </div>

                {/* TRUST BADGES */}
                <Segment style={{ marginTop: '1.5em', borderRadius: '15px', textAlign: 'center', border: 'none', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                    <Grid columns={2} divided>
                        <Grid.Column>
                            <Icon name='refresh' color='teal' />
                            <div style={{ fontSize: '0.8em', marginTop: '5px' }}>Free Returns</div>
                        </Grid.Column>
                        <Grid.Column>
                            <Icon name='shield' color='teal' />
                            <div style={{ fontSize: '0.8em', marginTop: '5px' }}>Secure Pay</div>
                        </Grid.Column>
                    </Grid>
                </Segment>

                {/* HELP BOX */}
                <Message info size='small' style={{ marginTop: '1em', borderRadius: '10px' }}>
                    <Icon name='phone' />
                    Need help? Call <strong>1-800-PET-LOVE</strong>
                </Message>

              </div>
            </Grid.Column>

          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Cart;