import userReducer from './auth';
import productReducer from './product';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    // refers to the state which you see in Chrome Dev Tools
    user: userReducer,
    productData: productReducer
});

export default allReducers;