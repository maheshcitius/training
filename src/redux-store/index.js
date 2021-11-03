import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import {initialState} from './state'

export const store = createStore(
    reducers,
    initialState,
    applyMiddleware(
        thunkMiddleware,
    )
);