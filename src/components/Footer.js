import React from 'react';
import { Segment, Container, Grid, Header, List, Icon, Divider, Button, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: '5em 0em', backgroundColor: '#111', borderTop: '4px solid #f2711c' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            
            {/* BRAND & MISSION */}
            <Grid.Column width={5}>
              <Header inverted as='h4' style={{ fontSize: '1.5em', letterSpacing: '1px' }}>
                <Icon name='paw' style={{ color: '#f2711c' }} />
                PET<span style={{ color: '#f2711c' }}>SHOP</span>
              </Header>
              <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                We are more than a store. We are a community of animal lovers dedicated to the health and happiness of your pets.
              </p>
              <Button circular color='facebook' icon='facebook' />
              <Button circular color='twitter' icon='twitter' />
              <Button circular color='instagram' icon='instagram' />
              <Button circular color='youtube' icon='youtube' />
            </Grid.Column>

            {/* QUICK LINKS */}
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Shop' style={{ color: '#f2711c' }} />
              <List link inverted relaxed>
                <List.Item as={Link} to="/shop">All Products</List.Item>
                <List.Item as={Link} to="/shop">Dog Food</List.Item>
                <List.Item as={Link} to="/shop">Cat Toys</List.Item>
                <List.Item as={Link} to="/adoption">Adoption</List.Item>
              </List>
            </Grid.Column>

            {/* SUPPORT */}
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Support' style={{ color: '#f2711c' }} />
              <List link inverted relaxed>
                <List.Item as={Link} to="/contact">Contact Us</List.Item>
                <List.Item as='a'>Shipping Policy</List.Item>
                <List.Item as='a'>Returns</List.Item>
                <List.Item as='a'>Track Order</List.Item>
              </List>
            </Grid.Column>

            {/* NEWSLETTER */}
            <Grid.Column width={5}>
              <Header inverted as='h4' content='Join The Pack' style={{ color: '#f2711c' }} />
              <p style={{ color: '#aaa' }}>Get 10% off your first order.</p>
              <Input 
                action={{ icon: 'arrow right', color: 'orange' }} 
                placeholder='Email address' 
                inverted
                size='small'
                fluid
              />
            </Grid.Column>
            
          </Grid.Row>

          <Divider inverted section />
          
          <Grid.Row>
             <Grid.Column width={8} verticalAlign='middle'>
                <p style={{ color: '#666', fontSize: '0.9em' }}>
                   © 2024 Pet Shop Project. Designed with <Icon name='heart' color='red' /> in Cairo.
                </p>
             </Grid.Column>
             <Grid.Column width={8} textAlign='right'>
                <Icon.Group size='large' style={{ opacity: 0.7 }}>
                    <Icon name='cc visa' />
                    <Icon name='cc mastercard' />
                    <Icon name='cc paypal' />
                    <Icon name='cc amex' />
                </Icon.Group>
             </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;