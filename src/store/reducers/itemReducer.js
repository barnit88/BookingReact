import * as itemAction from '../action/itemActionType';
import * as loginAction from '../action/actionType';

import  { updateItem } from '../utility';


const initialData = {data:[]}
 
const authItem = (state,action) => {

    return {
        data : action.payload
    };
    
}


const itemReducer = (state = initialData ,action ) => {
    switch (action.type) {
        case itemAction.AUTH_GET_ITEM : return authItem  (state,    action);
        
        default:
            return state;    
    }
}

export default itemReducer;
