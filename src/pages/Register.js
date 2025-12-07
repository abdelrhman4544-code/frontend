import React, { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon, Divider } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
            alert("Registration Successful!");
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
      backgroundImage: 'url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1920&auto=format&fit=crop)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '5em 0em' 
    }}>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            
            <Segment stacked style={{ padding: '2em', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Icon name='signup' /> Join the Family
                </Header>
                <p style={{ color: '#666', marginBottom: '1.5em' }}>
                    Create an account to get started.
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
                    />

                    {error && <Message negative>{error}</Message>}

                    <Button color='teal' fluid size='large' type="submit" style={{ marginTop: '1em' }}>
                        Create Account
                    </Button>
                </Form>

                {/* --- NEW SOCIAL MEDIA SECTION --- */}
                <Divider horizontal>Or Sign Up With</Divider>
                
                <Button color='facebook' fluid style={{ marginBottom: '10px' }}>
                  <Icon name='facebook' /> Facebook
                </Button>
                <Button color='google plus' fluid>
                  <Icon name='google' /> Google
                </Button>

            </Segment>

            <Message attached='bottom' warning>
                Already have an account? <Link to="/login" style={{ fontWeight: 'bold' }}>Log In</Link>
            </Message>
        </Grid.Column>
        </Grid>
    </div>
  );
};

export default Register;