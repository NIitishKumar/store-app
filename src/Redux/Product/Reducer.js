import { actionTypes } from "./ActionTypes";

const initial = {
    id : []
}

const appReducer = (state = initial, {type, payload}) => {
    let {id} = initial
    switch (type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                id:payload
            }
        
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                id:payload
            }

    
        default:
            return{
                state
            }
            break;
    }
}

export {appReducer}