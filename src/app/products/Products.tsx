import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getProductsAsync } from '../../store/actions/product'
import { IProduct } from '../../interfaces/iproduct';
import Product from '../product/Product';
import ProductFilter from '../product-filter/ProductFilter';

function Products(props: any) {
    const [category, setCategory] = useState(0);

    // tell React that your component needs to do something after render or after updating.
    useEffect(() => {
      props.getProducts(category);  
    }, [category]); // Only re-run the effect if category changes

    function onCategoryClick(e: any) {
      setCategory(e.target.id);     
    }

    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-3">
            <ProductFilter onCategoryClick={onCategoryClick} />
          </div>
          <div className="col-9">
            {props.productData.loaded &&
              <>
                <div className="row" >
                    {
                      props.productData.products.map((prod: IProduct) => {
                        return (
                          <div className="col" key={prod.productId}>
                            <Product product={prod} />
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
      getProducts: (categoryId: number) => {
          dispatch(getProductsAsync(categoryId))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)