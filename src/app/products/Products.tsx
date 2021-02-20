import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NumberFormat from 'react-number-format';

import { getProductsAsync } from '../../store/actions/product'
import { IProduct } from '../../interfaces/iproduct';

function Products(props: any) {

    useEffect(() => {
      props.getProducts();  
    }, []);

    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-3">
          
          </div>
          <div className="col-9">
            {props.productData.loaded &&
              <>
                <div className="row" >
                    {
                      props.productData.products.map((prod: IProduct) => {
                        return(
                          <div className="col" key={prod.productId}>
                            <Card className="mt-4" style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={prod.imageUrl} />
                            <Card.Body>
                              <Card.Title>{prod.name}</Card.Title>
                              <Card.Text>
                                <NumberFormat value={prod.price} displayType={'text'} thousandSeparator={true} decimalScale={2} fixedDecimalScale={true} prefix={'$'} />
                              </Card.Text>
                              <Button variant="secondary">Add To Cart</Button>
                            </Card.Body>
                            </Card>
                          </div>
                        )
                      })                     
                    }
                </div>
              </>
            }
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = (state: any) => {
  return {
      user: state.user,
      productData: state.productData
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      getProducts: () => {
          dispatch(getProductsAsync())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)