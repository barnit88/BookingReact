import * as actionTypes from './itemActionType';
import axios from 'axios';

export const itemStore = (data)=> {
    return {
        type    : actionTypes.AUTH_GET_ITEM,
        payload : data ,       
    }
}


export const auhtGetItem = () => {
    const t = localStorage.getItem('access');
    const token = `Bearer  ${t}`  ;

    return dispatch => {
        axios.get('http://127.0.0.1:8000/api/product/products/',
        {
            headers: {
                'Authorization': token
            }
        }
        )
        .then(res => {
            localStorage.setItem('data' , JSON.stringify(res.data));
            dispatch(itemStore(res.data));            
        })
        .catch(err => {
            console.log(err);
        })
    }
}
