import React from 'react';
import { Menu, Container, Icon, Button, Label, Dropdown, Image } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart(); 
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const location = useLocation();

  // Helper to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <Menu 
        fixed='top' 
        borderless 
        style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.95)', 
            backdropFilter: 'blur(10px)', 
            boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
            border: 'none',
            padding: '0.5em 0'
        }}
    >
      <Container>
        {/* BRAND LOGO */}
        <Menu.Item as={Link} to="/" header>
          <Icon name='paw' size='large' style={{ color: '#f2711c', marginRight: '0.5em', fontSize: '1.8em' }} />
          <span style={{ fontSize: '1.5em', fontWeight: '900', letterSpacing: '-1px', color: '#1b1c1d' }}>
            PET<span style={{ color: '#f2711c' }}>SHOP</span>
          </span>
        </Menu.Item>

        {/* NAVIGATION LINKS (Desktop) */}
        <Menu.Item as={Link} to="/" active={isActive('/')} style={{ fontWeight: 'bold' }}>Home</Menu.Item>
        <Menu.Item as={Link} to="/shop" active={isActive('/shop')} style={{ fontWeight: 'bold' }}>Shop</Menu.Item>
        <Menu.Item as={Link} to="/adoption" active={isActive('/adoption')} style={{ fontWeight: 'bold' }}>Adoption</Menu.Item>
        <Menu.Item as={Link} to="/about" active={isActive('/about')} style={{ fontWeight: 'bold' }}>About</Menu.Item>
        <Menu.Item as={Link} to="/contact" active={isActive('/contact')} style={{ fontWeight: 'bold' }}>Contact</Menu.Item>

        {/* RIGHT SIDE ACTIONS */}
        <Menu.Menu position='right'>
          
          {/* CART BUTTON */}
          <Menu.Item as={Link} to="/cart">
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Icon name='shopping bag' size='large' style={{ color: '#1b1c1d', margin: 0 }} />
                {totalItems > 0 && (
                  <Label 
                    color='orange' 
                    circular 
                    size='mini' 
                    style={{ position: 'absolute', top: '-8px', right: '-8px', border: '2px solid white' }}
                  >
                    {totalItems}
                  </Label>
                )}
            </div>
          </Menu.Item>

          {/* USER DROPDOWN */}
          <Dropdown item icon={null} trigger={<Icon name='user circle' size='large' style={{ color: '#1b1c1d' }} />}>
            <Dropdown.Menu style={{ marginTop: '10px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Dropdown.Header icon='user' content='Account' />
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/profile" icon='id card' text='My Profile' />
              <Dropdown.Item as={Link} to="/orders" icon='box' text='Orders' />
              <Dropdown.Item icon='settings' text='Settings' />
              <Dropdown.Divider />
              <Dropdown.Item icon='sign-out' text='Logout' />
            </Dropdown.Menu>
          </Dropdown>

          {/* AUTH BUTTONS */}
          <Menu.Item>
            <Button.Group size='small'>
                <Button as={Link} to="/login" basic color='black' style={{ borderRadius: '20px 0 0 20px' }}>Log in</Button>
                <Button as={Link} to="/register" color='black' style={{ borderRadius: '0 20px 20px 0' }}>Sign Up</Button>
            </Button.Group>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;