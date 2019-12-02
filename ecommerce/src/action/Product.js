import * as actionTypes from './actiontypes';
import axios from 'axios';

export const saveProduct = (objProduct) => dispatch => {

    console.log("Inaction", objProduct);
    var result = {
        productCode: '',
        product: ''
    }

    dispatch({
        type: actionTypes.SAVE_PRODUCT,
        payload: result
    })
}

export const saveProductServer = objProduct => dispatch=> {
    axios({
        method: "POST",
        url: "http://localhost:5003/api/saveproduct",
        data: objProduct
    }).then(res=>{
        dispatch({
            type: actionTypes.SAVE_PRODUCT,
            result: res.data
        })
    })
}