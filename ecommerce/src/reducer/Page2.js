import * as actionTypes from '../action/actiontypes';

const initialState = {
    data: []
}

export const getUserList = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.USER_LIST:
            console.log("InReducer:", action);
            return {
                ...state,
                ...action.result
            };
        default:
            return state;
    }
}