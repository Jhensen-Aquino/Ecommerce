import * as actionTypes from '../action/actiontypes';

const initialState = {
    username:'',
    password:'',
    isValidUser: false,
    isLoggedIn: false
}

export const login = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.LOGIN:
            console.log("InReducer:", action);
            return {
                ...state,
                ...action.result
            };
        default:
            return state;
    }
}