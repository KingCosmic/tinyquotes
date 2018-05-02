import { createStore } from 'redux';

//Import the reducer
import reducers from './reducers/index';
 
// Connect our store to the reducers
export default createStore(reducers);