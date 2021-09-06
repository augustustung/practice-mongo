import { combineReducers } from 'redux';
import UserReducer from './userReducer';

const store = combineReducers({
    user: UserReducer
})

export default store