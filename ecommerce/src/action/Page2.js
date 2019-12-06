import * as actionTypes from './actiontypes';
import axios from 'axios';


export const getUserList= () => dispatch => {
    axios({
        method: "GET",
        url: "http://localhost:5003/api/getuserlist"
    }).then(res=>{
        dispatch({
            type: actionTypes.USER_LIST,
            result: res.data
        })
    })
}