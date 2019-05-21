import { createStore } from 'redux';
import reducer from '../reducers';
// debugger
const store = createStore(reducer);
export default store;