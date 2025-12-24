import React, { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon, Divider } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// 1. IMPORT LOCAL ASSET
import registerBg from '../assets/petbg.avif';

const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if(inputs.password !== inputs.confirmPassword) {
        return setError("Passwords do not match!");
    }

    setLoading(true);

    axios.post('http://localhost:8080/api/user', {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password
    })
    .then((response) => {
        setLoading(false);
        if(response.data.Status === "OK") {
            alert("Registration Successful! Please Login.");
            navigate('/login');
        } else {
            setError("Registration failed: " + response.data.Message);
        }
    })
    .catch((err) => {
        setLoading(false);
        console.error(err);
        setError("Network Error. Ensure Backend is running.");
    });
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      // 2. BEAST MODE BACKGROUND
      backgroundColor: '#1b1c1d',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${registerBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2em 0' // Add padding for smaller screens
    }}>
        <Grid textAlign='center' style={{ width: '100%', maxWidth: '480px', margin: '0 1em' }} verticalAlign='middle'>
        <Grid.Column>
            
            {/* 3. GLASS CARD */}
            <div style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                backdropFilter: 'blur(15px)', 
                padding: '3em 2em', 
                borderRadius: '20px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}>
                <Header as='h2' color='teal' textAlign='center' style={{ fontSize: '2em', marginBottom: '0.2em' }}>
                    <Icon name='signup' /> Join the Family
                </Header>
                <p style={{ color: '#666', marginBottom: '2em', fontSize: '1.1em' }}>
                    Create an account to start your journey.
                </p>

                <Form size='large' onSubmit={handleSubmit} loading={loading}>
                    <Form.Input 
                        fluid 
                        icon='user' 
                        iconPosition='left' 
                        placeholder='Full Name' 
                        name="name"
                        value={inputs.name || ""} 
                        onChange={handleChange}
                        required
                        style={{ marginBottom: '1em' }}
                    />
                    <Form.Input 
                        fluid 
                        icon='mail' 
                        iconPosition='left' 
                        placeholder='E-mail address' 
                        name="email"
                        type="email"
                        value={inputs.email || ""} 
                        onChange={handleChange}
                        required
                        style={{ marginBottom: '1em' }}
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        name="password"
                        value={inputs.password || ""} 
                        onChange={handleChange}
                        required
                        style={{ marginBottom: '1em' }}
                    />
                    <Form.Input
                        fluid
                        icon='repeat'
                        iconPosition='left'
                        placeholder='Confirm Password'
                        type='password'
                        name="confirmPassword"
                        value={inputs.confirmPassword || ""} 
                        onChange={handleChange}
                        required
                        style={{ marginBottom: '1.5em' }}
                    />

                    {error && (
                        <Message negative size='small' style={{ marginBottom: '1em', borderRadius: '10px' }}>
                            <Icon name='warning circle' />
                            {error}
                        </Message>
                    )}

                    <Button color='teal' fluid size='large' type="submit" style={{ borderRadius: '50px', fontSize: '1.1em' }}>
                        Create Account
                    </Button>
                </Form>

                <Divider horizontal style={{ margin: '2em 0', color: '#aaa', textTransform: 'uppercase', fontSize: '0.8em' }}>Or Sign Up With</Divider>
                
                <Grid columns={2} stackable>
                    <Grid.Column>
                        <Button color='facebook' fluid size='small' style={{ borderRadius: '10px' }}>
                            <Icon name='facebook' /> Facebook
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button color='google plus' fluid size='small' style={{ borderRadius: '10px' }}>
                            <Icon name='google' /> Google
                        </Button>
                    </Grid.Column>
                </Grid>

                <div style={{ marginTop: '2em', paddingTop: '1em', borderTop: '1px solid #eee' }}>
                    <p style={{ color: '#666' }}>
                        Already have an account? <Link to="/login" style={{ fontWeight: 'bold', color: '#00b5ad' }}>Log In</Link>
                    </p>
                </div>

            </div>
        </Grid.Column>
        </Grid>
    </div>
  );
};

export default Register;