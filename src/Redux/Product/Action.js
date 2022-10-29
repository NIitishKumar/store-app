import axios from "axios";
import { actionTypes } from "./ActionTypes";

export  const addtoCart = (id) => async (dispatch) =>{
    dispatch({
        type:"ADD_TO_CART",
        payload:id
    })

    await axios({
        method:"POST",
        url:"https://immencenode.herokuapp.com/api/product/cart",
        data:{id}
    })
}

export  const removeFromCart = (id) => async (dispatch) =>{
    await axios({
        method:"PUT",
        url:"https://immencenode.herokuapp.com/api/product/cart",
        data:{id}
    })
    dispatch({
        type:"REMOVE_FROM_CART",
        payload:id
    })
}