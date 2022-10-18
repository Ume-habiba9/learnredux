import { createStore, applyMiddleware, compose } from 'redux'
import { allreducers } from './reducers/counter'
import thunk from 'redux-thunk'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 export const store = createStore(allreducers,storeEnhancers(applyMiddleware(thunk)));
store.subscribe(() => console.log(store.getState()));
