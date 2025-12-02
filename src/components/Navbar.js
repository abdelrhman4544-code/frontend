import React from 'react';
import { Menu, Container, Icon, Button, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // <--- 1. Import Context

const Navbar = () => {
  // 2. Get cart data from the "Brain"
  const { cartItems } = useCart(); 

  // Calculate total items (sum of quantities)
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Menu fixed='top' inverted color='teal'>
      <Container>
        <Menu.Item as={Link} to="/" header>
          <Icon name='paw' size='large' style={{ marginRight: '1.5em' }} />
          Pet Shop
        </Menu.Item>

        <Menu.Item as={Link} to="/">Home</Menu.Item>
        <Menu.Item as={Link} to="/shop">Shop</Menu.Item>
        <Menu.Item as={Link} to="/about">About Us</Menu.Item>
        <Menu.Item as={Link} to="/contact">Contact</Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item as={Link} to="/cart">
            <Icon name='shopping cart' />
            Cart
            {/* 3. SHOW RED BADGE IF ITEMS EXIST */}
            {totalItems > 0 && (
              <Label color='red' floating circular size='small' style={{ top: '5px', left: '85%' }}>
                {totalItems}
              </Label>
            )}
          </Menu.Item>

          <Menu.Item>
            <Button as={Link} to="/login" inverted>Log in</Button>
            <Button as={Link} to="/register" inverted style={{ marginLeft: '0.5em' }}>
              Sign Up
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;