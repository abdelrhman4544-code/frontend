import React from 'react';
import { Container, Header, Segment, Table, Button, Icon, Message } from 'semantic-ui-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, getCartTotal } = useCart();

  return (
    <div style={{ marginTop: '7em', marginBottom: '4em', minHeight: '80vh' }}>
      <Container>
        <Header as='h2' icon textAlign='center' style={{ marginBottom: '2em' }}>
          <Icon name='shopping cart' color='teal' />
          Your Shopping Cart
          <Header.Subheader>Review your items before checkout</Header.Subheader>
        </Header>

        {cartItems.length === 0 ? (
          <Segment placeholder textAlign='center'>
            <Header icon>
              <Icon name='cart arrow down' />
              Your cart is currently empty.
            </Header>
            <Button primary as={Link} to="/shop">Go Shopping</Button>
          </Segment>
        ) : (
          <Segment raised>
            <Table basic='very' celled collapsing style={{ width: '100%' }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Product</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                  <Table.HeaderCell>Quantity</Table.HeaderCell>
                  <Table.HeaderCell>Total</Table.HeaderCell>
                  <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {cartItems.map((item) => (
                  <Table.Row key={item.product_id}>
                    <Table.Cell>
                      <Header as='h4' image>
                        {/* Using default image if none exists */}
                        <Icon name='paw' size='large' color='teal' />
                        <Header.Content>
                          {item.name}
                          <Header.Subheader>{item.category}</Header.Subheader>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>${item.price}</Table.Cell>
                    <Table.Cell>{item.quantity}</Table.Cell>
                    <Table.Cell><strong>${(item.price * item.quantity).toFixed(2)}</strong></Table.Cell>
                    <Table.Cell>
                      <Button 
                        color='red' 
                        icon='trash' 
                        size='tiny' 
                        onClick={() => removeFromCart(item.product_id)} 
                      />
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>

            <Segment clearing basic>
              <Header as='h3' floated='right' color='green'>
                Total: ${getCartTotal().toFixed(2)}
              </Header>
              <Button color='orange' size='large' floated='right' style={{ marginRight: '1em' }}>
                Proceed to Checkout
              </Button>
            </Segment>
          </Segment>
        )}
      </Container>
    </div>
  );
};

export default Cart;