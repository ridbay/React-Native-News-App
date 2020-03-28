 import {createStore, applyMiddleware, compose} from 'redux';
 import thunk from 'redux-thunk';
 import rootReducer from './rootReducer';

 const enhancer = compose(applyMiddleware(thunk));