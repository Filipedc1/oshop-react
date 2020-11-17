import React from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useSelector, connect } from 'react-redux';
import { RootState } from '../../store/store';

function Navbar(props: any) {

    // const user = useSelector((state: RootState) => state.user);
    const user = props.user;
    console.log(user);


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
                    {!user.isLoggedIn
                        ? <Nav.Link className="float-right" href="/login">Login</Nav.Link>
                        : 
                        <NavDropdown title="username" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">My Orders</NavDropdown.Item>
                            {user.isAdmin && 
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

// connect allows our component to connect to redux. connect returns a component that wraps our Navbar component
export default connect(mapStateToProps)(Navbar)