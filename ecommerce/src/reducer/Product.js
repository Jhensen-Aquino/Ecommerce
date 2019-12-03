import * as actionTypes from '../action/actiontypes';

const initialState = {
    productCode: '',
    product: ''
}

export const saveProduct = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.SAVE_PRODUCT:
            console.log("InReducer:", action.result);
            return {
                ...state,
                ...action.result
            };
        default:
            return state;
    }
}