import * as actionTypes from '../action/actiontypes';

const initialState = {
    productCode: '',
    product: ''
}

export const saveProduct = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.SAVE_PRODUCT:
            console.log("InReducer:", action);
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}