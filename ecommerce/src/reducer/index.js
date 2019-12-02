import { combineReducers } from 'redux';
import { login } from './Login';
import { saveProduct } from './Product'

export default combineReducers({
    login,
    saveProduct
})