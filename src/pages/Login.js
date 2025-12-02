import React, { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react';
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

    // 1. FIXED: Changed axios.post to axios.get
    // Your backend uses: router.get('/login', ...)
    axios.get('http://localhost:8080/api/login', {
        // 2. FIXED: Send data as query parameters (req.query)
        params: {
            email: inputs.email,
            password: inputs.password
        }
    })
    .then((response) => {
        setLoading(false);
        // Your backend returns { Status: "OK", Message: "Loged In Successfully" }
        if (response.data.Status === "OK") {
            alert("Login Successful!");
            navigate('/shop'); 
        } else {
            // Your backend returns { Status: "Error", Message: "..." }
            setError(response.data.Message || "Invalid Credentials");
        }
    })
    .catch((err) => {
        setLoading(false);
        console.error(err);
        setError("Network Error or Server Offline.");
    });
  }

  return (
    <div style={{ backgroundColor: '#f2f2f2', minHeight: '100vh', padding: '5em 0em' }}>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
            <Icon name='sign-in' /> Log-in to your account
            </Header>
            <Form size='large' onSubmit={handleSubmit} loading={loading}>
            <Segment stacked>
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

                <Button color='teal' fluid size='large' type="submit">
                Login
                </Button>
            </Segment>
            </Form>
            <Message>
            New to us? <Link to="/register">Sign Up</Link>
            </Message>
        </Grid.Column>
        </Grid>
    </div>
  );
};

export default Login;