import { combineReducers } from 'redux';
import { login } from './Login';
import { saveProduct } from './Product';
import { getUserList } from './Page2';

export default combineReducers({
    login,
    saveProduct,
    getUserList
})