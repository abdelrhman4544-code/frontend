import React, { useState } from 'react';
// 1. ADDED 'Segment' TO THIS LIST
import { Container, Header, Grid, Card, Image, Icon, Button, Label, Progress, Modal, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import adoptionBg from '../assets/petbg.avif';

// MOCK DATA
const ADOPTABLE_PETS = [
  {
    id: 1,
    name: 'Luna',
    type: 'Dog',
    breed: 'Golden Retriever Mix',
    age: '2 Years',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1000&auto=format&fit=crop',
    story: 'Luna was found wandering near a park. She is incredibly gentle, loves belly rubs, and thinks she is a lap dog despite her size.',
    tags: ['Good with Kids', 'Potty Trained'],
    energy: 70,
    urgent: false
  },
  {
    id: 2,
    name: 'Oliver',
    type: 'Cat',
    breed: 'Tabby',
    age: '4 Months',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
    story: 'Oliver is a curiosity machine! He loves chasing laser pointers and will purr the moment you pick him up.',
    tags: ['Kitten', 'Playful'],
    energy: 95,
    urgent: true
  },
  {
    id: 3,
    name: 'Max',
    type: 'Dog',
    breed: 'Beagle',
    age: '5 Years',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1000&auto=format&fit=crop',
    story: 'Max is a soulful gentleman looking for a quiet retirement home. He loves slow walks and long naps in the sun.',
    tags: ['Senior', 'Calm'],
    energy: 30,
    urgent: false
  },
  {
    id: 4,
    name: 'Bella',
    type: 'Cat',
    breed: 'Siamese',
    age: '1 Year',
    image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=1000&auto=format&fit=crop',
    story: 'Bella is a vocal princess who will tell you exactly when it is dinner time. She is very affectionate on her own terms.',
    tags: ['Vocal', 'Queen'],
    energy: 60,
    urgent: false
  },
  {
    id: 5,
    name: 'Rocky',
    type: 'Dog',
    breed: 'Bulldog',
    age: '3 Years',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop',
    story: 'Rocky looks tough but is a total marshmallow. He loves fetch, drooling, and sleeping on your feet.',
    tags: ['Strong', 'Loyal'],
    energy: 50,
    urgent: true
  },
  {
    id: 6,
    name: 'Daisy',
    type: 'Cat',
    breed: 'Calico',
    age: '2 Years',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1000&auto=format&fit=crop',
    story: 'Daisy is shy at first but warms up quickly. She needs a patient owner who appreciates quiet companionship.',
    tags: ['Shy', 'Gentle'],
    energy: 20,
    urgent: false
  }
];

const Adoption = () => {
  const [filter, setFilter] = useState('All');
  const [open, setOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const handleOpen = (pet) => {
    setSelectedPet(pet);
    setOpen(true);
  };

  const filteredPets = filter === 'All' 
    ? ADOPTABLE_PETS 
    : ADOPTABLE_PETS.filter(pet => pet.type === filter);

  return (
    <div style={{ marginTop: '0', minHeight: '100vh', backgroundColor: '#fff' }}>
      
      {/* 1. EMOTIONAL HERO */}
      <div style={{ 
        height: '85vh', 
        width: '100%',
        backgroundColor: '#1b1c1d',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${adoptionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <Container text>
             <div style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.4)', 
                backdropFilter: 'blur(10px)', 
                padding: '4em 2em', 
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                <Header
                    as='h1'
                    content='FIND YOUR SOULMATE'
                    inverted
                    style={{ fontSize: '4.5em', fontWeight: '900', letterSpacing: '3px', marginBottom: '0.2em' }}
                />
                <Header
                    as='h2'
                    content='Unconditional love is waiting for you.'
                    inverted
                    style={{ fontSize: '1.6em', fontWeight: 'normal', color: 'rgba(255,255,255,0.9)' }}
                />
                <Button 
                    inverted 
                    color='orange' 
                    size='huge' 
                    style={{ marginTop: '2em', borderRadius: '50px', padding: '1em 3em' }}
                    onClick={() => {
                        const el = document.getElementById('pet-grid');
                        if(el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Start The Search
                </Button>
            </div>
        </Container>
      </div>

      {/* 2. STICKY FILTER BAR */}
      <div style={{ 
          position: 'sticky', 
          top: 0, 
          zIndex: 100, 
          backgroundColor: 'rgba(255,255,255,0.95)', 
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #eee',
          padding: '1.5em 0'
      }} id="pet-grid">
        <Container textAlign='center'>
             <Button.Group size='large' basic>
              <Button active={filter === 'All'} onClick={() => setFilter('All')} style={{ borderRadius: '20px 0 0 20px' }}>All Souls</Button>
              <Button active={filter === 'Dog'} onClick={() => setFilter('Dog')}><Icon name='paw' /> Dogs</Button>
              <Button active={filter === 'Cat'} onClick={() => setFilter('Cat')} style={{ borderRadius: '0 20px 20px 0' }}><Icon name='github alternate' /> Cats</Button>
            </Button.Group>
            <span style={{ marginLeft: '20px', color: '#888', fontWeight: 'bold' }}>
                {filteredPets.length} Friends Found
            </span>
        </Container>
      </div>

      {/* 3. PROFILE GRID */}
      <Container style={{ padding: '5em 0em' }}>
        <Grid columns={3} stackable doubling>
          {filteredPets.map((pet) => (
            <Grid.Column key={pet.id}>
              
              <Card fluid style={{ 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)', 
                  border: 'none', 
                  borderRadius: '20px', 
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)'; }}
              >
                
                <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                  <Image src={pet.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  
                  {pet.urgent && (
                    <div style={{ 
                        position: 'absolute', top: 20, right: 20, 
                        backgroundColor: '#db2828', color: 'white', 
                        padding: '5px 15px', borderRadius: '50px', 
                        fontWeight: 'bold', boxShadow: '0 5px 15px rgba(219, 40, 40, 0.4)'
                    }}>
                      <Icon name='heartbeat' /> URGENT
                    </div>
                  )}
                  
                  <div style={{ position: 'absolute', bottom: 0, width: '100%', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', padding: '20px' }}>
                     <Header as='h2' inverted style={{ margin: 0 }}>{pet.name}, {pet.age}</Header>
                     <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>{pet.breed}</p>
                  </div>
                </div>

                <Card.Content style={{ padding: '2em' }}>
                  <div style={{ marginBottom: '1.5em' }}>
                    {pet.tags.map((tag, i) => (
                      <Label key={i} circular size='small' style={{ backgroundColor: '#f0f0f0', color: '#555', marginRight: '5px' }}>{tag}</Label>
                    ))}
                  </div>
                  
                  <Card.Description style={{ color: '#666', fontSize: '1.1em', lineHeight: '1.6' }}>
                    {pet.story.substring(0, 80)}...
                  </Card.Description>

                  <div style={{ marginTop: '1.5em' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                        <span style={{ fontSize: '0.8em', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Energy</span>
                        <Icon name='bolt' size='small' color={pet.energy > 80 ? 'red' : 'yellow'} />
                    </div>
                    <Progress percent={pet.energy} size='tiny' color={pet.energy > 80 ? 'red' : pet.energy > 50 ? 'yellow' : 'blue'} active />
                  </div>
                </Card.Content>

                <Button attached='bottom' size='huge' color='black' onClick={() => handleOpen(pet)}>
                  Meet {pet.name}
                </Button>
              </Card>
            </Grid.Column>
          ))}
        </Grid>
      </Container>

      {/* 4. MODAL */}
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small'
        style={{ borderRadius: '20px', overflow: 'hidden' }}
      >
        <Modal.Header style={{ borderBottom: 'none', backgroundColor: '#f9f9f9', fontSize: '1.5em' }}>
            Adopt {selectedPet?.name}
        </Modal.Header>
        <Modal.Content image style={{ padding: 0 }}>
          <Image src={selectedPet?.image} style={{ width: '40%', objectFit: 'cover' }} />
          <Modal.Description style={{ padding: '2em', width: '60%' }}>
            <Header as='h2'>{selectedPet?.name}</Header>
            <p style={{ fontSize: '1.2em', lineHeight: '1.6', color: '#555' }}>{selectedPet?.story}</p>
            
            <Grid columns={2} style={{ marginTop: '1em' }}>
                <Grid.Column>
                    <Header sub>AGE</Header>
                    <span>{selectedPet?.age}</span>
                </Grid.Column>
                <Grid.Column>
                    <Header sub>BREED</Header>
                    <span>{selectedPet?.breed}</span>
                </Grid.Column>
            </Grid>
            
            <Segment basic style={{ backgroundColor: '#f0f9ff', borderRadius: '10px', marginTop: '2em', padding: '1.5em' }}>
                <Header as='h5' icon color='blue'>
                    <Icon name='info circle' />
                    Ready to love?
                </Header>
                <p style={{ fontSize: '0.9em' }}>Click below to send an inquiry. Reference ID: <strong>#{selectedPet?.id}</strong></p>
            </Segment>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions style={{ backgroundColor: '#f9f9f9', padding: '1.5em' }}>
          <Button basic onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button
            content="Start Adoption Process"
            labelPosition='right'
            icon='arrow right'
            onClick={() => setOpen(false)}
            as={Link}
            to="/contact"
            color='orange'
            size='large'
          />
        </Modal.Actions>
      </Modal>

    </div>
  );
};

export default Adoption;