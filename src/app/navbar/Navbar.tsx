import React, { useEffect } from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { connect } from 'react-redux';

import { isAuthenticated } from '../../store/actions/user'

function Navbar(props: any) {

    useEffect(() => {
        props.isLoggedIn();  
    }, []);

    return (
        <NavBar bg="dark" variant="dark" expand="lg">
            <NavBar.Brand href="#home">oShop</NavBar.Brand>
            <NavBar.Toggle aria-controls="basic-navbar-nav" />
            <NavBar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                </Nav>
                <Nav className="mr-5">
                    {!props.user.isLoggedIn
                        ? <Nav.Link className="float-right" href="/login">Login</Nav.Link>
                        : 
                        <NavDropdown title={props.user.userName} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">My Orders</NavDropdown.Item>
                            {props.user.isAdmin && 
                             <>
                                <NavDropdown.Item href="#action/3.2">Manage Orders</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Manage Products</NavDropdown.Item>
                             </>
                            }
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                        </NavDropdown>
                    }
                </Nav>
            </NavBar.Collapse>
        </NavBar>
    );
}

// grab what we need from the state of our store, and maps it to this components props
const mapStateToProps = (state:any) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        isLoggedIn: () => {
            dispatch(isAuthenticated())
        }
    }
}

// connect allows our component to connect to redux. connect returns a component that wraps our Navbar component
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)