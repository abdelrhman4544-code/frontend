import React, { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  
  // 1. Changed 'username' to 'name' to match your Database
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

    // 2. FIXED: Changed URL to '/api/user' and payload to 'name'
    axios.post('http://localhost:8080/api/user', {
        name: inputs.name,  // <--- Backend expects 'name'
        email: inputs.email,
        password: inputs.password
    })
    .then((response) => {
        setLoading(false);
        // Check if backend sent a success status
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
        setError("Network Error. Ensure Backend is running on Port 8080.");
    });
  }

  return (
    <div style={{ backgroundColor: '#f2f2f2', minHeight: '100vh', padding: '5em 0em' }}>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
            <Icon name='paw' /> Create New Account
            </Header>
            <Form size='large' onSubmit={handleSubmit} loading={loading}>
            <Segment stacked>
                <Form.Input 
                    fluid 
                    icon='user' 
                    iconPosition='left' 
                    placeholder='Full Name' 
                    name="name" // <--- Changed from username
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

                <Button color='teal' fluid size='large' type="submit">
                Sign Up
                </Button>
            </Segment>
            </Form>
            <Message>
            Already have an account? <Link to="/login">Log In</Link>
            </Message>
        </Grid.Column>
        </Grid>
    </div>
  );
};

export default Register;