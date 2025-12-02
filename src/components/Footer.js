import React from 'react';
import { Segment, Container, Grid, Header, List, Icon } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: '5em 0em', backgroundColor: '#1b1c1d' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            
            {/* Column 1: About */}
            <Grid.Column width={5}>
              <Header inverted as='h4' content='About Pet Shop' />
              <List link inverted>
                <List.Item as='a'>Our Story</List.Item>
                <List.Item as='a'>The Team</List.Item>
                <List.Item as='a'>Careers</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
              </List>
            </Grid.Column>

            {/* Column 2: Quick Links */}
            <Grid.Column width={5}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Pet Grooming</List.Item>
                <List.Item as='a'>Veterinary Checks</List.Item>
                <List.Item as='a'>Adoption Program</List.Item>
                <List.Item as='a'>Pet Training</List.Item>
              </List>
            </Grid.Column>

            {/* Column 3: Awareness/Contact */}
            <Grid.Column width={6}>
              <Header inverted as='h4' content='Stay Connected' />
              <p>
                We are dedicated to providing the best for your furry friends. 
                Follow us for tips on pet care!
              </p>
              <div style={{ fontSize: '1.5em' }}>
                <Icon name='facebook' style={{ cursor: 'pointer' }} />
                <Icon name='twitter' style={{ cursor: 'pointer', marginLeft: '10px' }} />
                <Icon name='instagram' style={{ cursor: 'pointer', marginLeft: '10px' }} />
                <Icon name='youtube' style={{ cursor: 'pointer', marginLeft: '10px' }} />
              </div>
            </Grid.Column>
            
          </Grid.Row>
          
          <Grid.Row>
             <Grid.Column textAlign='center'>
                <p style={{ marginTop: '2em', color: '#666' }}>
                   © 2024 Pet Shop Project. All rights reserved.
                </p>
             </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;