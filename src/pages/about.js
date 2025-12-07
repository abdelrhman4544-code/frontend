import React from 'react';
import { Container, Header, Segment, Grid, Image, Icon, Button, Statistic, Card, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ marginTop: '4em' }}>
      
      {/* 1. EMOTIONAL HERO SECTION */}
      <Segment 
        inverted 
        vertical 
        style={{ 
          padding: '10em 0em', 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?q=80&w=1920&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed' // Parallax effect
        }}
      >
        <Container text textAlign='center'>
          <Header
            as='h1'
            content='More Than Just a Pet Shop'
            inverted
            style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          />
          <Header
            as='h2'
            content='We are a family of animal lovers, dedicated to the happiness of your best friend.'
            inverted
            style={{ fontSize: '1.7em', fontWeight: 'normal', marginTop: '1.5em' }}
          />
          <Button color='orange' size='huge' as={Link} to="/contact" style={{ marginTop: '1em' }}>
            <Icon name='heart' />
            Join Our Story
          </Button>
        </Container>
      </Segment>

      {/* 2. OUR STORY (Split Layout) */}
      <Segment style={{ padding: '6em 0em' }} vertical>
        <Container>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em', color: '#00b5ad' }}>
                  <Icon name='paw' />
                  Our "Tail"
                </Header>
                <p style={{ fontSize: '1.33em', color: '#555' }}>
                  It all started with a rescue dog named <strong>Barnaby</strong>. When our founder couldn't find 
                  nutritious food that Barnaby actually liked, he decided to change the industry.
                </p>
                <p style={{ fontSize: '1.33em', color: '#555' }}>
                  Since 2024, we have been on a mission to provide <strong>vet-approved</strong>, 
                  <strong>organic</strong>, and <strong>joy-inducing</strong> products to pets everywhere. 
                  We believe that pets aren't just animals—they are the heartbeat of our homes.
                </p>
                <br />
                <Button basic color='teal' size='large'>Read Our Full History</Button>
              </Grid.Column>
              <Grid.Column width={6} floated='right'>
                <Image 
                  bordered 
                  rounded 
                  size='large' 
                  src='https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1000&auto=format&fit=crop' 
                  style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>

      {/* 3. FUN STATS (Impact Section) */}
      <Segment inverted color='teal' style={{ padding: '4em 0em' }} vertical>
        <Container textAlign='center'>
            <Statistic.Group inverted widths='four'>
                <Statistic>
                    <Statistic.Value>
                        <Icon name='home' /> 500+
                    </Statistic.Value>
                    <Statistic.Label>Pets Rehomed</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>
                        <Icon name='shipping fast' /> 12k
                    </Statistic.Value>
                    <Statistic.Label>Orders Delivered</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>
                        <Icon name='smile' /> 98%
                    </Statistic.Value>
                    <Statistic.Label>Happy Tails</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>
                        <Icon name='heart' /> ∞
                    </Statistic.Value>
                    <Statistic.Label>Belly Rubs Given</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        </Container>
      </Segment>

      {/* 4. MEET THE TEAM (With a twist) */}
      <Segment style={{ padding: '6em 0em', backgroundColor: '#f9f9f9' }} vertical>
        <Container>
          <Header as='h2' textAlign='center' style={{ fontSize: '2.5em', marginBottom: '2em' }}>
            Meet The Pack Leaders
          </Header>
          
          <Grid columns={3} stackable centered>
            {/* Human 1 */}
            <Grid.Column>
                <Card centered fluid>
                    <Image src='https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop' wrapped ui={false} height="300px" style={{objectFit:'cover'}} />
                    <Card.Content>
                        <Card.Header>Dr. Alex Smith</Card.Header>
                        <Card.Meta>Founder & Vet</Card.Meta>
                        <Card.Description>
                            Alex ensures every product is safe, healthy, and scientifically approved.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='linkedin' /> @alexsmith
                    </Card.Content>
                </Card>
            </Grid.Column>

            {/* Human 2 */}
            <Grid.Column>
                <Card centered fluid>
                    <Image src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop' wrapped ui={false} height="300px" style={{objectFit:'cover'}} />
                    <Card.Content>
                        <Card.Header>Sarah Jones</Card.Header>
                        <Card.Meta>Head of Happiness</Card.Meta>
                        <Card.Description>
                            Sarah manages our community and adoption drives with endless energy.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='instagram' /> @sarah_pets
                    </Card.Content>
                </Card>
            </Grid.Column>

            {/* The Dog (Creative Twist) */}
            <Grid.Column>
                <Card centered fluid color='orange'>
                    <Image src='https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=1000&auto=format&fit=crop' wrapped ui={false} height="300px" style={{objectFit:'cover'}} />
                    <Card.Content>
                        <Card.Header>Barnaby</Card.Header>
                        <Card.Meta>Chief Treat Taster</Card.Meta>
                        <Card.Description>
                            Barnaby sleeps 16 hours a day and approves all snacks personally.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='paw' /> Employee of the Month
                    </Card.Content>
                </Card>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>

      {/* 5. OUR PROMISE */}
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                <Icon name='shield alternate' color='teal' />
                Safety First
              </Header>
              <p style={{ fontSize: '1.33em' }}>We never sell anything we wouldn't give to our own pets.</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                <Icon name='refresh' color='teal' />
                Easy Returns
              </Header>
              <p style={{ fontSize: '1.33em' }}>If your pet doesn't love it, we'll take it back. No questions asked.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

    </div>
  );
};

export default About;