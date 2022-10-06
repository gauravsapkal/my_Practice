import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer.js';


const initState = { count : 0, todos : [] };

export const store = createStore(reducer, initState);