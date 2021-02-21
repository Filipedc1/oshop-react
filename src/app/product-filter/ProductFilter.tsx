import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ICategory } from '../../interfaces/icategory';
import { getCategoriesAsync } from '../../store/actions/category'

function ProductFilter(props: any) {
    useEffect(() => {
        props.getCategories();  
    }, []); 

    return (
        <div className="sticky-top mt-4">
            <div className="list-group">
                <button className="list-group-item active list-group-item-action" 
                        id="0"
                        onClick={props.onCategoryClick}>
                    All Categories
                </button>

                {props.categoryData.loaded &&
                    <>
                        {
                            props.categoryData.categories.map((cat: ICategory) => {
                                return (
                                    <button className="list-group-item list-group-item-action" 
                                            key={cat.categoryId}
                                            id={cat.categoryId.toString()}
                                            onClick={props.onCategoryClick}>
                                        {cat.name}
                                    </button>
                                )
                            }) 
                        }
                    </>
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        categoryData: state.categoryData
    }
  }
  
  const mapDispatchToProps = (dispatch: any) => {
    return {
        getCategories: () => {
            dispatch(getCategoriesAsync())
        }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter)