import React from 'react';
import { Container, Header, Segment, Grid, Image, Icon, Button, Statistic, Card, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ marginTop: '0', backgroundColor: '#fff' }}>
      
      {/* 1. CINEMATIC GLASS HERO */}
      <div style={{ 
        height: '85vh', 
        width: '100%',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?q=80&w=1920&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Parallax
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
         <Container text textAlign='center'>
          <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            backdropFilter: 'blur(20px)', // Strong Glass Effect
            padding: '4em 2em', 
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}>
            <Header
              as='h1'
              content='PASSION & PURPOSE'
              inverted
              style={{ 
                fontSize: '4.5em', 
                fontWeight: '900', 
                letterSpacing: '5px',
                marginBottom: '0.2em',
                textTransform: 'uppercase'
              }}
            />
            <p style={{ fontSize: '1.5em', color: '#eee', fontFamily: 'Georgia, serif', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
              "We don't just sell pet supplies. We engineer happiness for your four-legged family members."
            </p>
            <Button 
                inverted 
                color='orange' 
                size='huge' 
                as={Link} to="/contact" 
                style={{ marginTop: '2em', borderRadius: '50px', padding: '1em 3em' }}
            >
              Join Our Journey
            </Button>
          </div>
        </Container>
      </div>

      {/* 2. THE MANIFESTO (Bold Storytelling) */}
      <Segment vertical style={{ padding: '8em 0em', backgroundColor: '#fff' }}>
        <Container>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '1.2em', color: '#f2711c', textTransform: 'uppercase', letterSpacing: '2px' }}>
                  Our Origin Story
                </Header>
                <Header as='h2' style={{ fontSize: '3em', margin: '0.2em 0 0.5em 0' }}>
                  It Started With <br/> <span style={{ textDecoration: 'underline', textDecorationColor: '#00b5ad' }}>One Rescue Dog.</span>
                </Header>
                <p style={{ fontSize: '1.3em', color: '#555', lineHeight: '1.8' }}>
                  In 2024, our founder met <strong>Barnaby</strong>, a shelter dog with a sensitive stomach and a heart of gold. 
                  Frustrated by the lack of transparent, healthy options in the market, we decided to build what didn't exist.
                </p>
                <p style={{ fontSize: '1.3em', color: '#555', lineHeight: '1.8' }}>
                  Today, we are a collective of vets, designers, and animal lovers obsessed with quality. We believe that 
                  <strong> love is a verb</strong>, and we show it through every product we curate.
                </p>
              </Grid.Column>
              
              <Grid.Column width={7} floated='right'>
                {/* Image Stack Effect */}
                <div style={{ position: 'relative', padding: '2em' }}>
                    <div style={{ 
                        position: 'absolute', top: 0, right: 0, 
                        width: '100%', height: '100%', 
                        border: '5px solid #00b5ad', 
                        zIndex: 0,
                        transform: 'translate(20px, -20px)'
                    }}></div>
                    <Image 
                        bordered 
                        size='large' 
                        src='https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1000&auto=format&fit=crop' 
                        style={{ position: 'relative', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                    />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>

      {/* 3. IMPACT DASHBOARD (Dark Mode) */}
      <Segment inverted vertical style={{ padding: '6em 0em', backgroundColor: '#1b1c1d' }}>
        <Container textAlign='center'>
            <Header as='h3' inverted style={{ fontSize: '2em', marginBottom: '2em', textTransform: 'uppercase', letterSpacing: '3px' }}>
                By The Numbers
            </Header>
            <Statistic.Group inverted widths='four' size='small'>
                <Statistic>
                    <Statistic.Value style={{ color: '#00b5ad' }}>500+</Statistic.Value>
                    <Statistic.Label style={{ letterSpacing: '2px' }}>Pets Rehomed</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value style={{ color: '#f2711c' }}>12k</Statistic.Value>
                    <Statistic.Label style={{ letterSpacing: '2px' }}>Happy Customers</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value style={{ color: '#21ba45' }}>100%</Statistic.Value>
                    <Statistic.Label style={{ letterSpacing: '2px' }}>Organic</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value style={{ color: '#a333c8' }}>∞</Statistic.Value>
                    <Statistic.Label style={{ letterSpacing: '2px' }}>Belly Rubs</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        </Container>
      </Segment>

      {/* 4. THE PACK (Clean Profile Cards) */}
      <Segment style={{ padding: '8em 0em', backgroundColor: '#f9f9f9' }} vertical>
        <Container>
          <Header as='h2' textAlign='center' style={{ fontSize: '3em', marginBottom: '0.5em', fontWeight: '900' }}>
            MEET THE PACK
          </Header>
          <p style={{ textAlign: 'center', fontSize: '1.3em', color: '#777', marginBottom: '3em' }}>The humans (and dogs) behind the brand.</p>
          
          <Grid columns={3} stackable centered>
            
            {/* Human 1 */}
            <Grid.Column>
                <Card fluid style={{ border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderRadius: '15px', overflow: 'hidden' }}>
                    <Image src='https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop' wrapped ui={false} height="350px" style={{objectFit:'cover'}} />
                    <Card.Content textAlign='center' style={{ padding: '2em' }}>
                        <Card.Header style={{ fontSize: '1.5em' }}>Dr. Alex Smith</Card.Header>
                        <Card.Meta style={{ color: '#00b5ad', fontWeight: 'bold', marginTop: '5px' }}>FOUNDER & VET</Card.Meta>
                        <Card.Description>
                            "I check every ingredient list personally. If I wouldn't feed it to my dog, we don't sell it."
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>

            {/* Human 2 */}
            <Grid.Column>
                <Card fluid style={{ border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderRadius: '15px', overflow: 'hidden' }}>
                    <Image src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop' wrapped ui={false} height="350px" style={{objectFit:'cover'}} />
                    <Card.Content textAlign='center' style={{ padding: '2em' }}>
                        <Card.Header style={{ fontSize: '1.5em' }}>Sarah Jones</Card.Header>
                        <Card.Meta style={{ color: '#f2711c', fontWeight: 'bold', marginTop: '5px' }}>HEAD OF COMMUNITY</Card.Meta>
                        <Card.Description>
                            "My job is simple: connect lonely pets with loving humans. It's the best job in the world."
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>

            {/* The Dog (Star of the Show) */}
            <Grid.Column>
                <Card fluid style={{ border: 'none', boxShadow: '0 10px 30px rgba(242, 113, 28, 0.15)', borderRadius: '15px', overflow: 'hidden' }}>
                    <Image src='https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=1000&auto=format&fit=crop' wrapped ui={false} height="350px" style={{objectFit:'cover'}} />
                    <Card.Content textAlign='center' style={{ padding: '2em', backgroundColor: '#fffbf2' }}>
                        <Card.Header style={{ fontSize: '1.5em' }}>Barnaby</Card.Header>
                        <Card.Meta style={{ color: '#000', fontWeight: 'bold', marginTop: '5px' }}>CHIEF TREAT OFFICER</Card.Meta>
                        <Card.Description>
                            Barnaby works hard sleeping 16 hours a day and testing our plush toys for durability.
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>

      {/* 5. THE PROMISE (Minimalist Footer) */}
      <Segment vertical style={{ padding: '6em 0em', backgroundColor: '#fff' }}>
        <Container text textAlign='center'>
            <Icon name='handshake' size='huge' color='grey' style={{ opacity: 0.3, marginBottom: '0.5em' }} />
            <Header as='h2' style={{ fontSize: '2.5em' }}>Our Promise To You</Header>
            <p style={{ fontSize: '1.4em', color: '#666', lineHeight: '1.6' }}>
                We promise transparency, quality, and unconditional love. If you aren't 100% satisfied with anything you buy, 
                we will fix it. Because pets are family, and family deserves the best.
            </p>
            <Divider section />
            <Button basic color='black' size='large' as={Link} to="/shop">Start Shopping</Button>
        </Container>
      </Segment>

    </div>
  );
};

export default About;