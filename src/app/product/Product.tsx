import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NumberFormat from 'react-number-format';

function Product(props: any) {

    useEffect(() => {
        
    }, []);

    return (
        <Card className="mt-4" style={{ width: '20rem' }}>
        <Card.Img variant="top" src={props.product.imageUrl} />
        <Card.Body>
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Text>
            <NumberFormat value={props.product.price} displayType={'text'} thousandSeparator={true} decimalScale={2} fixedDecimalScale={true} prefix={'$'} />
            </Card.Text>
            <Button variant="secondary">Add To Cart</Button>
        </Card.Body>
        </Card>
    );
}

export default Product