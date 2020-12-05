import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';

import { loginAsync } from '../../store/actions/user'

function Login(props: any) {
    // local state variables called username and password. useState is a React Hook
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [validated, setValidated] = useState(false);

    // tell React that your component needs to do something after render or after updating.
    useEffect(() => {
        //setLoading(false);  
    });

    function handleLogin(e: any) {
        e.preventDefault();
        setLoading(true);    

        //your client side validation here
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
        }
        else {           
            props.loginUser({username: username, password: password}, props.history);
        }

        setValidated(true);
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
                {props.user.error &&
                    <>
                        <div className="alert alert-danger text-center" role="alert">Username or password is not valid.</div>
                    </>
                }
                <Form noValidate validated={validated} className="login-form" onSubmit={handleLogin}>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control required onChange={handleUsernameChange} type="text" placeholder="Username" value={username} />
                        <Form.Control.Feedback type="invalid">
                            Username is required.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required onChange={handlePasswordChange} type="password" placeholder="Password" value={password} />
                        <Form.Control.Feedback type="invalid">
                            Password is required.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="rememberMe">
                        <Form.Check type="checkbox" label="Remember Password?" />
                    </Form.Group>
                    <Button type="submit">Login</Button>
                </Form>
            </Col>
        </Container>
    );
}

// grab what we need from the state of our store, and maps it to this components props
const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
}

// the loginUser function will be attached to our props within this component
const mapDispatchToProps = (dispatch: any) => {
    return {
        loginUser: (loginModel: any, history: any) => {
            dispatch(loginAsync(loginModel, history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)