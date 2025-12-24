import React, { useState } from 'react';
import { Container, Header, Grid, Segment, Form, Button, Icon, Message, Accordion, Label } from 'semantic-ui-react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        setSuccess(true);
    }, 2000);
  };

  return (
    <div style={{ marginTop: '0', backgroundColor: '#fff', minHeight: '100vh' }}>
      
      {/* 1. CINEMATIC BACKGROUND HEADER */}
      <div style={{ 
        height: '70vh', 
        width: '100%',
        
        // 1. FALLBACK COLOR (If image fails, this Dark Grey shows up so text is readable)
        backgroundColor: '#1b1c1d',
        
        // 2. NEW IMAGE (High Contrast) + DARKER OVERLAY (0.7 opacity)
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=1920&auto=format&fit=crop)',
        
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <Header
            as='h1'
            content="WE'RE LISTENING"
            inverted
            style={{ 
                fontSize: '5em', 
                fontWeight: '900', 
                letterSpacing: '5px',
                marginBottom: '0',
                textShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
        />
        <Header
            as='h2'
            content="Support, adoptions, or just a friendly bark."
            inverted
            style={{ 
                fontSize: '1.5em', 
                fontWeight: 'normal', 
                marginTop: '0.5em',
                color: 'rgba(255,255,255,0.9)'
            }}
        />
      </div>

      {/* 2. THE FLOATING COMMAND CENTER */}
      <Container style={{ marginTop: '-10em', position: 'relative', zIndex: 10, marginBottom: '5em' }}>
        <Grid stackable>
          <Grid.Row stretched>
            
            {/* LEFT: THE DARK CARD */}
            <Grid.Column width={6}>
              <div style={{ 
                  backgroundColor: '#1b1c1d', 
                  color: 'white', 
                  padding: '3em', 
                  borderRadius: '20px', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
              }}>
                <div>
                    <Label color='teal' ribbon>HEADQUARTERS</Label>
                    <Header as='h3' style={{ color: 'white', fontSize: '2em', marginTop: '0.5em' }}>
                        Visit The Shop
                    </Header>
                    
                    <div style={{ marginTop: '2em', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                        <Icon name='map marker alternate' color='teal' size='large' />
                        <div>
                            <p style={{ fontSize: '1.2em', margin: 0, fontWeight: 'bold' }}>Cairo Flagship</p>
                            <p style={{ color: '#aaa' }}>123 Pet Lover Lane, Cairo, Egypt</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '1.5em', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                        <Icon name='phone' color='teal' size='large' />
                        <div>
                            <p style={{ fontSize: '1.2em', margin: 0, fontWeight: 'bold' }}>Call Us</p>
                            <p style={{ color: '#aaa' }}>+20 123 456 7890</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '1.5em', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                        <Icon name='clock' color='teal' size='large' />
                        <div>
                            <p style={{ fontSize: '1.2em', margin: 0, fontWeight: 'bold' }}>Open Hours</p>
                            <p style={{ color: '#aaa' }}>Daily: 9:00 AM - 9:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* DARK MAP */}
                <div style={{ 
                    marginTop: '3em', 
                    borderRadius: '15px', 
                    overflow: 'hidden', 
                    border: '2px solid #333',
                    height: '250px'
                }}>
                    <iframe 
                        title="Cairo Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.170889270578!2d31.23571161511476!3d30.04441968188235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840911422736b%3A0x2a1d2f6244f2430!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2seg!4v1620000000000!5m2!1sen!2seg" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
                        allowFullScreen="" 
                        loading="lazy">
                    </iframe>
                </div>
              </div>
            </Grid.Column>

            {/* RIGHT: THE FORM */}
            <Grid.Column width={10}>
              <div style={{ 
                  backgroundColor: 'white', 
                  padding: '4em', 
                  borderRadius: '20px', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  height: '100%'
              }}>
                <Header as='h3' style={{ fontSize: '2.5em', marginBottom: '0.2em', color: '#333' }}>
                   Send a Message
                </Header>
                <p style={{ color: '#888', marginBottom: '2em' }}>
                    We usually reply within 2 hours.
                </p>

                {success ? (
                    <Message positive icon size='big' style={{ boxShadow: 'none', border: '1px solid #21ba45' }}>
                        <Icon name='check circle' />
                        <Message.Content>
                            <Message.Header>Message Sent!</Message.Header>
                            <p>Thank you. We will bark back at you soon!</p>
                            <Button basic color='green' onClick={() => setSuccess(false)}>Send Another</Button>
                        </Message.Content>
                    </Message>
                ) : (
                    <Form size='large' onSubmit={handleSubmit} loading={loading}>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='First Name' placeholder='John' />
                            <Form.Input fluid label='Last Name' placeholder='Doe' />
                        </Form.Group>
                        <Form.Input type='email' fluid label='Email Address' placeholder='john@example.com' />
                        <Form.Select
                            fluid
                            label='Topic'
                            options={[
                                { key: 'o', text: 'Order Status', value: 'order' },
                                { key: 'a', text: 'Adoption Inquiry', value: 'adoption' },
                                { key: 'p', text: 'Product Question', value: 'product' },
                            ]}
                            placeholder='What can we help with?'
                        />
                        <Form.TextArea label='Message' placeholder='Type your message here...' style={{ minHeight: 180 }} />
                        
                        <Button color='black' size='huge' fluid type='submit' style={{ marginTop: '1em' }}>
                            <Icon name='paper plane' /> Send Message
                        </Button>
                    </Form>
                )}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {/* 3. FAQ SECTION */}
        <Segment vertical style={{ padding: '6em 0em', border: 'none' }}>
            <Container text>
                <Header as='h3' textAlign='center' style={{ fontSize: '2em', marginBottom: '1.5em' }}>
                    Common Questions
                </Header>
                <Accordion fluid styled style={{ boxShadow: 'none', backgroundColor: '#f9f9f9' }}>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={handleClick} style={{ fontSize: '1.2em', padding: '1.5em' }}>
                        <Icon name='dropdown' /> What is your return policy?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0} style={{ padding: '1.5em', fontSize: '1.1em' }}>
                        <p>We offer a <strong>30-day "Happy Pet" guarantee</strong>. If your pet doesn't love the product, return it for a full refund—no questions asked!</p>
                    </Accordion.Content>
                    
                    <Accordion.Title active={activeIndex === 1} index={1} onClick={handleClick} style={{ fontSize: '1.2em', padding: '1.5em' }}>
                        <Icon name='dropdown' /> How fast is shipping?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1} style={{ padding: '1.5em', fontSize: '1.1em' }}>
                        <p>Super fast! We dispatch same-day for orders before 2PM. Most Cairo orders arrive within 24 hours.</p>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 2} index={2} onClick={handleClick} style={{ fontSize: '1.2em', padding: '1.5em' }}>
                        <Icon name='dropdown' /> Do you offer grooming?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2} style={{ padding: '1.5em', fontSize: '1.1em' }}>
                        <p>Currently, we only sell grooming products. However, we are opening our first physical grooming salon in 2025!</p>
                    </Accordion.Content>
                </Accordion>
            </Container>
        </Segment>
      </Container>
    </div>
  );
};

export default Contact;