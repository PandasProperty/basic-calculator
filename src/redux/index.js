import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger'

import calculatorReducer from './calculator';

export const reducer = combineReducers({
    calculator: calculatorReducer
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;