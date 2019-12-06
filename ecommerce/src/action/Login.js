import * as actionTypes from './actiontypes';
import axios from 'axios';

export const login = objUser => dispatch => {

    console.log("Inaction", objUser);
    var result = {
        isValidUser: false,
        userType: '',
        username: ''
    }
    if (objUser.username === "admin") {
        result.isValidUser = true;
        result.userType = "ADMIN";
        result.username = objUser.username;
    } else {
        result.isValidUser = false;
        result.userType = "GUEST";
        result.username = "GUEST";
    }
    dispatch({
        type: actionTypes.LOGIN,
        result
    })
}

export const loginServer = objUser => dispatch=> {
    axios({
        method: "POST",
        url: "http://localhost:5003/api/login",
        data: objUser
    }).then(res=>{
        dispatch({
            type: actionTypes.LOGIN,
            result: res.data
        })
    })
}