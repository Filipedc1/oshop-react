import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../login/Login.css';
import { connect } from 'react-redux';

import { login } from '../../store/actions/user'

function Login(props: any) {

    function handleLogin(e:any) {
        e.preventDefault();
        
        props.loginUser({username: 'test', password: '12'});
        props.history.push('/'); //redirect to home page
    }

    return (
        <Container className="pt-4">
            <Col md={8} className="mx-auto">
                <Form className="login-form">
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
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
            dispatch(login(loginModel))
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)