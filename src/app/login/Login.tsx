import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../login/Login.css';
import { connect } from 'react-redux';

import { loginAsync } from '../../store/actions/user'

function Login(props: any) {
    // local state variables called username and password. useState is a React Hook
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e:any) {
        e.preventDefault();
            
        props.loginUser({username: username, password: password});
        props.history.push('/'); //redirect to home page

        // handle logic to only redirect to home if not errored
    }

    function handleUsernameChange(e: any) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e: any) {
        setPassword(e.target.value);
    }

    return (
        <Container className="pt-4">
            <Col md={8} className="mx-auto">
                <Form className="login-form">
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={handleUsernameChange} type="username" placeholder="Enter username" value={username} />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" value={password} />
                    </Form.Group>
                    <Form.Group controlId="rememberMe">
                        <Form.Check type="checkbox" label="Remember Password?" />
                    </Form.Group>
                    <Button onClick={(e) => handleLogin(e)} variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Col>
        </Container>
    );
}

// the loginUser function will be attached to our props within this component
const mapDispatchToProps = (dispatch:any) => {
    return {
        loginUser: (loginModel:any) => {
            dispatch(loginAsync(loginModel))
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)