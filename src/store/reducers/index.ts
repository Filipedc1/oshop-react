import userReducer from './auth';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    // refers to the state which you see in Chrome Dev Tools
    user: userReducer
});

export default allReducers;