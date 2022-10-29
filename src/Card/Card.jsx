import React from 'react'
import style from './style.module.css'
import { useDispatch, useSelector } from "react-redux";
import {addtoCart , removeFromCart} from '../Redux/Product/Action'

function Card({addToCart ,id,image,name,description, price}) {

    
  //? Dispatch
  let dispatch = useDispatch();

  //? useSelector
  const auth = useSelector((state) => state);
  console.log(auth)

  return (
    <div className={style.card}>
        {console.log(addToCart)}
        <img src={image} alt='productimage' />
        <p>{name}</p>
        <p>Rs {price}</p>
        <p className={style.desc}>{description?.slice(0,100)} {description?.length > 100 ? ". . ." : null}</p>
        <div>
        <button>Buy Now</button>
        <button onClick={() => addToCart ? dispatch(addtoCart(id)) : dispatch(removeFromCart(id))} className={style.cart}>{addToCart ? "Add to Cart" : "Remove Item"}</button>
        </div>
    </div>
  )
}

export default Card