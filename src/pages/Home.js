import React from 'react';
import { Container, Header, Button, Icon, Grid, Segment, Image, Card, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import foodImg from '../assets/food4.jpg';
import toyImg from '../assets/cattoy.jpg';
import cageImg from '../assets/cage.jpg';
// IMPORT THE LOCAL IMAGE
// Note: We use .. to go up one level from 'pages' to 'src', then into 'assets'
import petbg from '../assets/petbg.avif';

const Home = () => {
  return (
    <div style={{ marginTop: '4em' }}>
      
      {/* 1. HERO SECTION (Using Local Image) */}
      <Segment 
        inverted 
        vertical 
        style={{ 
          padding: '10em 0em', // Increased padding for a taller, more cinematic look
          backgroundImage: `url(${petbg})`, // Using the imported variable
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.5)' // Slightly darker overlay for better text contrast
        }}
      >
        <Container text textAlign='center'>
          <Header
            as='h1'
            content='Welcome to the Pet Shop'
            style={{ 
              fontSize: '4.5em', 
              fontWeight: 'bold', 
              marginBottom: 0, 
              color: '#ffffff',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          />
          <Header
            as='h2'
            content='Premium food, toys, and accessories for your new best friend.'
            style={{ 
              fontSize: '1.7em', 
              fontWeight: 'normal', 
              marginTop: '1em', 
              color: '#f0f0f0' 
            }}
          />
          <Button primary size='huge' as={Link} to="/shop" style={{ marginTop: '1.5em' }}>
            Shop Now
            <Icon name='right arrow' />
          </Button>
        </Container>
      </Segment>

      {/* 2. WHY CHOOSE US (Expanded Text) */}
      <Segment style={{ padding: '6em 0em' }} vertical>
        <Container>
          <Header as='h2' textAlign='center' style={{ marginBottom: '2em', fontSize: '2.5em' }}>
            Why We Are The Best Choice
          </Header>
          <Grid columns={3} stackable textAlign='center'>
            <Grid.Row verticalAlign='top'>
              <Grid.Column>
                <Icon name='shipping fast' size='huge' color='teal' style={{ marginBottom: '0.5em' }} />
                <Header as='h3'>Super Fast Delivery</Header>
                <p style={{ fontSize: '1.1em', color: '#666' }}>
                  We know your pet can't wait! We offer same-day dispatch on all orders placed before 2 PM. 
                  Enjoy free shipping on all orders over $50, delivered straight to your doorstep.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Icon name='heartbeat' size='huge' color='red' style={{ marginBottom: '0.5em' }} />
                <Header as='h3'>Vet Approved Quality</Header>
                <p style={{ fontSize: '1.1em', color: '#666' }}>
                  Your pet's health is our priority. Every food item and toy in our catalog is rigorously 
                  safety-checked and approved by certified veterinarians to ensure they are safe and nutritious.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Icon name='dollar' size='huge' color='green' style={{ marginBottom: '0.5em' }} />
                <Header as='h3'>Unbeatable Prices</Header>
                <p style={{ fontSize: '1.1em', color: '#666' }}>
                  Providing the best for your pet shouldn't break the bank. We offer a price match guarantee 
                  on all premium brands, ensuring you get the highest quality for the best value.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>

      {/* 3. ADOPTION SECTION (With Background Images & Fade Effect) */}
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            
            {/* COLUMN 1: ADOPTION */}
            <Grid.Column style={{ 
              paddingBottom: '5em', 
              paddingTop: '5em', 
              // This line creates a white see-through layer over the image
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.9)), url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000&auto=format&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <Header as='h3' style={{ fontSize: '2.5em', color: '#f2711c' }}>
                <Icon name='paw' />
                Adopt, Don't Shop
              </Header>
              <p style={{ fontSize: '1.4em', maxWidth: '600px', margin: '1em auto', lineHeight: '1.6', color: '#000' }}>
                Every year, thousands of loving pets are looking for a second chance. 
                Our adoption program connects rescued animals with forever families. 
                All our rescue pets come fully vaccinated, microchipped, and ready to love.
              </p>
              <Button size='huge' color='orange' icon labelPosition='left'>
                <Icon name='heart' />
                Meet Our Rescues
              </Button>
            </Grid.Column>

           {/* COLUMN 2: NUTRITION */}
           <Grid.Column style={{ 
              paddingBottom: '5em', 
              paddingTop: '5em', 
              // FIXED: Direct link to the image
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.5)), url(https://wallpapercave.com/wp/wp10346253.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <Header as='h3' style={{ fontSize: '2.5em', color: '#2185d0' }}>
                <Icon name='star' />
                Premium Nutrition
              </Header>
              <p style={{ fontSize: '1.4em', maxWidth: '600px', margin: '1em auto', lineHeight: '1.6', color: '#000' }}>
                Good health starts with good food. We stock strictly organic, grain-free, 
                and biologically appropriate diets for dogs, cats, and small animals. 
                Fuel their adventures with the best ingredients nature has to offer.
              </p>
              <Button size='huge' basic color='blue' as={Link} to="/shop">
                View Food Catalog
              </Button>
            </Grid.Column>
            
          </Grid.Row>
        </Grid>
      </Segment>

   {/* 4. FEATURED PRODUCTS SECTION (Updated Images) */}
   <Segment style={{ padding: '5em 0em' }} vertical>
        <Container>
          <Header as='h2' textAlign='center' style={{ marginBottom: '1.5em', fontSize: '2.5em' }}>
            Featured Products
          </Header>
          <Grid columns={3} stackable>
             
             {/* Product 1: Dog Food */}
             <Grid.Column>
              <Card centered fluid>
                {/* 2. USE THE VARIABLE HERE */}
                <Image src={foodImg} wrapped ui={false} height="250px" style={{ objectFit: 'cover' }} />
                <Card.Content>
                  <Card.Header>Premium Dog Food</Card.Header>
                  <Card.Meta>Available in 5kg & 10kg</Card.Meta>
                  <Card.Description>High-protein formula for active dogs.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                   <Icon name='dollar' /> 25.00
                   <Button floated='right' primary size='small'>Add to Cart</Button>
                </Card.Content>
              </Card>
            </Grid.Column>
            
             {/* Product 2: Cat Toy */}
             <Grid.Column>
              <Card centered fluid>
                {/* USE THE VARIABLE HERE */}
                <Image src={toyImg} wrapped ui={false} height="250px" style={{ objectFit: 'cover' }} />
                <Card.Content>
                  <Card.Header>Interactive Cat Toy</Card.Header>
                  <Card.Meta>Best Seller</Card.Meta>
                  <Card.Description>Keep your cat entertained for hours.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                   <Icon name='dollar' /> 12.00
                   <Button floated='right' primary size='small'>Add to Cart</Button>
                </Card.Content>
              </Card>
            </Grid.Column>

             {/* Product 3: Bird Cage */}
             <Grid.Column>
              <Card centered fluid>
                {/* USE THE VARIABLE HERE */}
                <Image src={cageImg} wrapped ui={false} height="250px" style={{ objectFit: 'cover' }} />
                <Card.Content>
                  <Card.Header>Deluxe Bird Cage</Card.Header>
                  <Card.Meta>Rust-proof coating</Card.Meta>
                  <Card.Description>Spacious home for parakeets and finches.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                   <Icon name='dollar' /> 45.00
                   <Button floated='right' primary size='small'>Add to Cart</Button>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>

      
     
    </div>
    
  );
};

export default Home;