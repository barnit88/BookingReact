import * as actionTypes from './actionType';
import axios from 'axios';

export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {  
    return {
        type : actionTypes.AUTH_SUCCESS,
        token : token
    }
}

export const authFail = error => {
    return {
        type : actionTypes.AUTH_FAIL ,
        error : error
    }
}

export const authLogout = () =>{
    console.log('Logout');
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('data');
    return {
        type    : actionTypes.AUTH_LOGOUT,
        token   : null,
        payload : [],
    }
}

export const authRefresh = (refresh) => {
    return dispatch => {
        axios.post("127.0.0.1:8000/api/account/token/refresh/",
        {
            refresh : refresh
        })
        .then(res=>{
            const access = res.data.access;
            localStorage.setItem('access', access);
            dispatch(authSuccess(access));
        })
    }
}

export const authLogin = (username , password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/api/account/login/',
        {
            email       : username,
            password    : password
        })
        .then(res => {
            const access = res.data.access;
            const refresh = res.data.refresh;
            localStorage.setItem('access', access);
            localStorage.setItem('refresh', refresh);
            const token = res.data.access;
            dispatch(authSuccess(access));
        })
        .catch(err => {
            dispatch(authFail(err));  
        })
    }
}

export const authRegister = (name , contact , gender,email,password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/api/account/register/',
        {
            name       : name,
            contact     : contact,
            gender      : gender,
            user        : {
                email : email,
                password : password
            }
        })
        .then(res => {
            console.log('From authLogin');
            const access = res.data.access;
            const refresh = res.data.refresh;
            localStorage.setItem('access', access);
            localStorage.setItem('refresh', refresh);
            const token = res.data.access;
            dispatch(authSuccess(token));
        })
        .catch(err => {
            dispatch(authFail(err));  
        })
    }
}
