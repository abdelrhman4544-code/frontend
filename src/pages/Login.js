import React, { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon, Divider } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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

    // Using GET because your backend uses router.get('/login')
    axios.get('http://localhost:8080/api/login', {
        params: { email: inputs.email, password: inputs.password }
    })
    .then((response) => {
        setLoading(false);
        console.log("Backend Response:", response.data); // <--- Check Console for this!

        // --- THE FIX IS HERE ---
        // Scenario 1: Backend returns { Status: "OK" }
        // Scenario 2: Backend returns { user_id: 1, name: "..." }
        if (response.data.Status === "OK" || response.data.user_id || response.data.id) {
            
            // Optional: Save user to local storage so they stay logged in
            localStorage.setItem('user', JSON.stringify(response.data));
            
            alert("Login Successful! Redirecting...");
            navigate('/shop'); 
        } else {
            // If it's not OK and has no user ID, show error
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
      minHeight: '100vh', 
      backgroundImage: 'url(https://images.unsplash.com/photo-1450778865369-0994ca878097?q=80&w=1920&auto=format&fit=crop)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '5em 0em' 
    }}>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            
            <Segment stacked style={{ padding: '2em', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Icon name='paw' /> Welcome Back!
                </Header>
                <p style={{ color: '#666', marginBottom: '1.5em' }}>
                    Login to access your pet's favorites.
                </p>

                <Form size='large' onSubmit={handleSubmit} loading={loading}>
                    <Form.Input 
                        fluid 
                        icon='user' 
                        iconPosition='left' 
                        placeholder='E-mail address' 
                        name="email"
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

                    {error && <Message negative>{error}</Message>}

                    <Button color='teal' fluid size='large' type="submit" style={{ marginTop: '1em' }}>
                        Login
                    </Button>
                </Form>

                <Divider horizontal>Or Login With</Divider>
                
                <Button color='facebook' fluid style={{ marginBottom: '10px' }}>
                  <Icon name='facebook' /> Facebook
                </Button>
                <Button color='google plus' fluid>
                  <Icon name='google' /> Google
                </Button>

            </Segment>

            <Message attached='bottom' warning>
                <Icon name='help' />
                New to us? <Link to="/register" style={{ fontWeight: 'bold' }}>Sign Up here</Link>
            </Message>
        </Grid.Column>
        </Grid>
    </div>
  );
};

export default Login;