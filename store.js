import thunkMiddleware from "redux-thunk";
import createRootReducer from './redux/reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';

let middleware = [thunkMiddleware]

export default store = createStore(createRootReducer, applyMiddleware(...middleware));
