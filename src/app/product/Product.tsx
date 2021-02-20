import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';

function Product(props: any) {

    useEffect(() => {
        
    }, []);

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Add To Cart</Button>
        </Card.Body>
        </Card>
    );
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loginUser: (loginModel: any, history: any) => {
            //dispatch(loginAsync(loginModel, history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)