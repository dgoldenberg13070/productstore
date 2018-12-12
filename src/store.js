import { combineReducers } from 'redux';
import productsReducer from './reducers/productsReducer';

//My store is a collection of reducers 
//if I had a simple app, I could just keep all my reducer functions in this file
const store = combineReducers({
    productsReducer
})

export default store