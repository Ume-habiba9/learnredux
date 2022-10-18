import { combineReducers } from 'redux';
import updatebalance from '../reduce/reducer';

 export const allreducers = combineReducers({
    balance: updatebalance
});
   