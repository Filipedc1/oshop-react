import userReducer from './auth';
import productReducer from './product';
import { combineReducers } from 'redux';
import categoryReducer from './category';

const allReducers = combineReducers({
    // refers to the state which you see in Chrome Dev Tools
    user: userReducer,
    productData: productReducer,
    categoryData: categoryReducer
});

export default allReducers;