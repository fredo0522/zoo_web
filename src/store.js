import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from './reducers';

const middleware = [thunk];

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware)
);

const store = createStore(
  allReducers,
  composedEnhancers
);

export default store;