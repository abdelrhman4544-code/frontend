import React, { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon, Divider } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// 1. IMPORT LOCAL ASSET (Guaranteed to work)
import loginBg from '../assets/petbg.avif';

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    axios.get('http://localhost:8080/api/login', {
        params: { email: inputs.email, password: inputs.password }
    })
    .then((response) => {
        setLoading(false);
        // Robust check for various success responses
        if (response.data.Status === "OK" || response.data.user_id || response.data.id) {
            localStorage.setItem('user', JSON.stringify(response.data));
            alert("Login Successful! Redirecting...");
            navigate('/shop'); 
        } else {
            setError(response.data.Message || "Invalid Credentials");
        }
    })
    .catch((err) => {
        setLoading(false);
        console.error(err);
        setError("Network Error. Check if Backend is running.");
    });
  }

  return (
    <div style={{ 
      // 1. FULL SCREEN CINEMATIC BACKGROUND
      minHeight: '100vh',
      backgroundColor: '#1b1c1d', // Fallback color
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${loginBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        <Grid textAlign='center' style={{ width: '100%', maxWidth: '450px', margin: '0 1em' }} verticalAlign='middle'>
        <Grid.Column>
            
            {/* 2. GLASSMORPHISM CARD */}
            <div style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)', // High opacity for readability
                backdropFilter: 'blur(15px)', 
                padding: '3em 2em', 
                borderRadius: '20px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}>
                <Header as='h2' color='teal' textAlign='center' style={{ fontSize: '2em', marginBottom: '0.2em' }}>
                    <Icon name='paw' /> Welcome Back
                </Header>
                <p style={{ color: '#666', marginBottom: '2em', fontSize: '1.1em' }}>
                    Access your pet's favorites & orders.
                </p>

                <Form size='large' onSubmit={handleSubmit} loading={loading}>
                    <Form.Input 
                        fluid 
                        icon='mail' 
                        iconPosition='left' 
                        placeholder='E-mail address' 
                        name="email"
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
                        style={{ marginBottom: '1.5em' }}
                    />

                    {error && (
                        <Message negative size='small' style={{ marginBottom: '1em', borderRadius: '10px' }}>
                            <Icon name='warning circle' />
                            {error}
                        </Message>
                    )}

                    <Button color='teal' fluid size='large' type="submit" style={{ borderRadius: '50px', fontSize: '1.1em' }}>
                        Sign In
                    </Button>
                </Form>

                <Divider horizontal style={{ margin: '2em 0', color: '#aaa', textTransform: 'uppercase', fontSize: '0.8em' }}>Or continue with</Divider>
                
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
                        Don't have an account? <Link to="/register" style={{ fontWeight: 'bold', color: '#00b5ad' }}>Join the Family</Link>
                    </p>
                </div>

            </div>
        </Grid.Column>
        </Grid>
    </div>
  );
};

export default Login;