import React from 'react';
import { Container, Header, Button, Icon, Grid, Segment, Image, Card, Input, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// ASSETS
import foodImg from '../assets/food4.jpg';
import toyImg from '../assets/cattoy.jpg';
import cageImg from '../assets/cage.jpg';
import petbg from '../assets/petbg.avif';

const Home = () => {
  return (
    <div style={{ marginTop: '0', backgroundColor: '#fff' }}>
      
      {/* 1. CINEMATIC HERO (Full Screen Height) */}
      <div style={{ 
        height: '90vh', 
        width: '100%',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${petbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Parallax
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        {/* Floating Content Box */}
        <Container text textAlign='center'>
          <Segment raised style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
            backdropFilter: 'blur(10px)', // Glass effect
            padding: '4em', 
            borderRadius: '20px',
            border: 'none',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}>
            <Header
              as='h1'
              content='UNLEASH JOY'
              style={{ 
                fontSize: '4em', 
                fontWeight: '900', 
                letterSpacing: '5px',
                color: '#1b1c1d',
                marginBottom: '0.2em',
                textTransform: 'uppercase'
              }}
            />
            <p style={{ fontSize: '1.4em', color: '#555', marginBottom: '2em', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              The ultimate destination for the modern pet parent.
            </p>
            
            <Button.Group size='huge'>
              <Button color='black' as={Link} to="/shop">
                Shop Essentials
              </Button>
              <Button.Or />
              <Button color='orange' as={Link} to="/adoption">
                Adopt a Friend
              </Button>
            </Button.Group>
          </Segment>
        </Container>
      </div>

      {/* 2. FLOATING TRUST BAR (Overlaps the Hero) */}
      <Container style={{ marginTop: '-4em', position: 'relative', zIndex: 10 }}>
        <Segment style={{ padding: '3em', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: 'none' }}>
          <Grid columns={3} stackable divided textAlign='center'>
            <Grid.Column>
              <Header as='h3' icon>
                <Icon name='shipping fast' color='teal' />
                Same-Day Dispatch
                <Header.Subheader>Order before 2PM</Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header as='h3' icon>
                <Icon name='star' color='yellow' />
                5-Star Rated
                <Header.Subheader>Trusted by 10k+ Owners</Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header as='h3' icon>
                <Icon name='leaf' color='green' />
                100% Organic
                <Header.Subheader>Only the best ingredients</Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>

      {/* 3. THE "EDITORIAL" SPLIT (Edge to Edge) */}
      <div style={{ marginTop: '6em' }}>
        <Grid stackable columns={2} style={{ margin: 0 }}>
          
          {/* LEFT: DARK MODE NUTRITION */}
          <Grid.Column style={{ 
            padding: '8em 4em', 
            backgroundColor: '#1b1c1d', 
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <Label color='teal' ribbon>PREMIUM DIET</Label>
            <Header as='h2' style={{ fontSize: '3.5em', color: 'white', marginTop: '0.5em' }}>
              Fuel Their <br/> <span style={{ color: '#00b5ad' }}>Adventures.</span>
            </Header>
            <p style={{ fontSize: '1.3em', color: '#aaa', maxWidth: '450px', lineHeight: '1.8' }}>
              Generic kibble is out. Biologically appropriate, grain-free, and nutrient-dense whole foods are in. Give them the health they deserve.
            </p>
            <div style={{ marginTop: '2em' }}>
                <Button inverted color='teal' size='large' as={Link} to="/shop">View Food Collection</Button>
            </div>
          </Grid.Column>

          {/* RIGHT: VIBRANT ADOPTION */}
          <Grid.Column style={{ 
            padding: '0', 
            backgroundImage: 'url(https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=1000&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '500px'
          }}>
            {/* Overlay content on the image */}
            <div style={{ 
                height: '100%', 
                width: '100%', 
                background: 'rgba(242, 113, 28, 0.85)', // Strong Orange Overlay
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                textAlign: 'center',
                padding: '2em',
                transition: 'opacity 0.3s',
                opacity: 0, // Hidden by default
                cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1} // Reveal on Hover
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
            >
                <Icon name='home' size='huge' inverted />
                <Header as='h2' inverted style={{ fontSize: '3em' }}>Change a Life</Header>
                <Button size='huge' inverted basic as={Link} to="/adoption">Meet The Pets</Button>
            </div>
            
            {/* Visual hint that it's hoverable */}
            <div style={{ position: 'absolute', bottom: 20, right: 20, color: 'white', fontWeight: 'bold' }}>
                HOVER TO ADOPT <Icon name='arrow right' />
            </div>
          </Grid.Column>

        </Grid>
      </div>

      {/* 4. CURATED COLLECTIONS (Broken Grid Layout) */}
      <Segment vertical style={{ padding: '8em 0em', backgroundColor: '#f9f9f9' }}>
        <Container>
          <Header as='h2' textAlign='center' style={{ fontSize: '3em', marginBottom: '1.5em', fontWeight: '900' }}>
            THE CURATED EDIT
          </Header>
          
          <Grid columns={3} stackable>
            {/* CARD 1 */}
            <Grid.Column>
              <div style={{ 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)', 
                  backgroundColor: 'white',
                  transition: 'transform 0.3s'
              }}>
                <Image src={foodImg} style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
                <div style={{ padding: '2em' }}>
                    <Header as='h3'>The Nutrition Edit</Header>
                    <p style={{ color: '#888' }}>Organic blends for longevity.</p>
                    <Button basic color='black' fluid as={Link} to="/shop">Shop Food</Button>
                </div>
              </div>
            </Grid.Column>

            {/* CARD 2 (Highlighted) */}
            <Grid.Column style={{ marginTop: '-2em' }}> {/* Offset this card up for visual interest */}
              <div style={{ 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  boxShadow: '0 15px 35px rgba(242, 113, 28, 0.2)', // Orange glow 
                  backgroundColor: 'white',
                  border: '2px solid #f2711c'
              }}>
                <Label color='orange' ribbon>BEST SELLER</Label>
                <Image src={toyImg} style={{ height: '320px', objectFit: 'cover', width: '100%' }} />
                <div style={{ padding: '2em' }}>
                    <Header as='h3' color='orange'>Interactive Play</Header>
                    <p style={{ color: '#888' }}>Keep them engaged for hours.</p>
                    <Button color='orange' fluid as={Link} to="/shop">Shop Toys</Button>
                </div>
              </div>
            </Grid.Column>

            {/* CARD 3 */}
            <Grid.Column>
              <div style={{ 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)', 
                  backgroundColor: 'white' 
              }}>
                <Image src={cageImg} style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
                <div style={{ padding: '2em' }}>
                    <Header as='h3'>Comfort & Homes</Header>
                    <p style={{ color: '#888' }}>Safe spaces for small animals.</p>
                    <Button basic color='black' fluid as={Link} to="/shop">Shop Cages</Button>
                </div>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>

      {/* 5. NEWSLETTER (Full Width Gradient) */}
      <Segment vertical style={{ 
          padding: '6em 0em', 
          background: 'linear-gradient(135deg, #00b5ad 0%, #2185d0 100%)',
          color: 'white'
      }}>
        <Container text textAlign='center'>
            <Icon name='paper plane' size='huge' inverted />
            <Header as='h2' inverted style={{ fontSize: '3em', marginTop: '0.5em' }}>
                Join The Inner Circle
            </Header>
            <p style={{ fontSize: '1.3em', opacity: 0.9, marginBottom: '2em' }}>
                Get 15% off your first order and exclusive access to new arrivals.
            </p>
            <Input 
                fluid 
                size='massive' 
                placeholder='Enter your email address' 
                action={{ 
                    color: 'black', 
                    labelPosition: 'right', 
                    icon: 'arrow right', 
                    content: 'Subscribe' 
                }} 
            />
        </Container>
      </Segment>

    </div>
  );
};

export default Home;