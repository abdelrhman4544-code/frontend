import React, { useState } from 'react';
import { Container, Header, Segment, Grid, Form, Button, Icon, Message, Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Simulate form submission
    setSubmitted(true);
    // In a real app, you'd send the data to a server
  };

  return (
    <div style={{ marginTop: '4em' }}>
      
      {/* 1. HERO SECTION */}
      <Segment 
        inverted 
        vertical 
        style={{ 
          padding: '10em 0em', 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1920&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed' // Parallax effect
        }}
      >
        <Container text textAlign='center'>
          <Header
            as='h1'
            content='Get In Touch With Us'
            inverted
            style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          />
          <Header
            as='h2'
            content='We love hearing from our pet-loving community. Drop us a line!'
            inverted
            style={{ fontSize: '1.7em', fontWeight: 'normal', marginTop: '1.5em' }}
          />
          <Button color='orange' size='huge' as={Link} to="/shop" style={{ marginTop: '1em' }}>
            <Icon name='paw' />
            Shop While You Wait
          </Button>
        </Container>
      </Segment>

      {/* 2. CONTACT FORM AND INFO */}
      <Segment style={{ padding: '6em 0em' }} vertical>
        <Container>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h2' style={{ fontSize: '2.5em', color: '#00b5ad' }}>
                  <Icon name='mail' />
                  Send Us a Message
                </Header>
                <p style={{ fontSize: '1.2em', color: '#666' }}>
                  Have a question about our products, adoption process, or just want to say hi? 
                  We'd love to hear from you!
                </p>
                {submitted ? (
                  <Message success>
                    <Message.Header>Thank You!</Message.Header>
                    <p>Your message has been sent. We'll get back to you soon!</p>
                  </Message>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Form.Input
                      label='Name'
                      placeholder='Your Name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input
                      label='Email'
                      placeholder='your.email@example.com'
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input
                      label='Subject'
                      placeholder='Subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    <Form.TextArea
                      label='Message'
                      placeholder='Tell us more...'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <Button type='submit' color='teal' size='large'>
                      <Icon name='send' />
                      Send Message
                    </Button>
                  </Form>
                )}
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as='h2' style={{ fontSize: '2.5em', color: '#f2711c' }}>
                  <Icon name='map marker alternate' />
                  Visit Us
                </Header>
                <p style={{ fontSize: '1.2em', color: '#666' }}>
                  Come say hello to our furry friends and browse our store in person!
                </p>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>Pet Shop Headquarters</Card.Header>
                    <Card.Meta>123 Paw Avenue, Pet City, PC 12345</Card.Meta>
                    <Card.Description>
                      <Icon name='phone' /> (555) 123-PETS<br />
                      <Icon name='mail' /> hello@petshop.com<br />
                      <Icon name='clock' /> Mon-Fri: 9AM-7PM, Sat-Sun: 10AM-5PM
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Button color='orange' as={Link} to="/about">
                      <Icon name='info' />
                      Learn More About Us
                    </Button>
                  </Card.Content>
                </Card>
                <Image 
                  src='https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop' 
                  size='large' 
                  centered 
                  style={{ marginTop: '2em', borderRadius: '8px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>

      {/* 3. FUN CTA SECTION */}
      <Segment inverted color='teal' style={{ padding: '4em 0em' }} vertical>
        <Container textAlign='center'>
          <Header as='h2' style={{ fontSize: '2.5em' }}>
            <Icon name='heart' />
            Ready to Adopt or Shop?
          </Header>
          <p style={{ fontSize: '1.3em' }}>
            Join thousands of happy pet owners. Your new best friend is waiting!
          </p>
          <Button.Group size='huge'>
            <Button color='orange' as={Link} to="/shop">
              <Icon name='shopping cart' />
              Shop Now
            </Button>
            <Button.Or />
            <Button basic inverted as={Link} to="/about">
              <Icon name='paw' />
              Adopt Today
            </Button>
          </Button.Group>
        </Container>
      </Segment>

    </div>
  );
};

export default Contact;
