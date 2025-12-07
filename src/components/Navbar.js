import React from 'react';
import { Menu, Container, Icon, Button, Label, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart(); 
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
            {totalItems > 0 && (
              <Label color='red' floating circular size='small' style={{ top: '5px', left: '85%' }}>
                {totalItems}
              </Label>
            )}
          </Menu.Item>

          {/* --- NEW USER ICON DROPDOWN --- */}
          <Dropdown item icon='user simple'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/profile">My Profile</Dropdown.Item>
              <Dropdown.Item as={Link} to="/orders">My Orders</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

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