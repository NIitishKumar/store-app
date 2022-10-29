import React from "react";
import style from "./style.module.css";
import axios from "axios";
import { useEffect } from "react";
import instance from "../Helper/Axios";
import Card from "../Card/Card";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Product() {
  const [data, setData] = useState({});
  const [cartItem, setCartItem] = useState([]);
  const [orderItem , setOrderItem] = useState([])
  const [orderOpen, setOrderOpen] = useState(false);

  const getProducts = async () => {
    try {
      const data = await axios({
        method: "GET",
        url: "https://immencenode.herokuapp.com/api/product",
      });
      console.log(data);
      setData(data.data.data);
    } catch (error) {}
  };

  const getCartProducts = async () => {
    try {
      const data = await axios({
        method: "GET",
        url: "https://immencenode.herokuapp.com/api/product/cart",
      });
      console.log(data);
      setCartItem(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  

  const getOrderItems = async () => {
    try {
        const data = await axios({
          method: "GET",
          url: "https://immencenode.herokuapp.com/api/product/order",
        });
        console.log(data);
        setOrderItem(data.data.data);
      } catch (error) {
        console.log(error);
      }
  }

  const addOrderItems = async () => {
    try {
        let ids = cartItem.map(x => x._id)
        const data = await axios({
          method: "POST",
          url: "https://immencenode.herokuapp.com/api/product/order",
          data:{items:ids}
        });
        console.log(data);
        setCartItem(data.data.data);
      } catch (error) {
        console.log(error);
      }
  }

  //? useSelector
  const auth = useSelector((state) => state);

  useEffect(() => {
    
    getOrderItems()
  },[orderOpen])

  useEffect(() => {
    getProducts();
    getCartProducts();
  }, [auth]);

  const orderHandler = () => {

    setOrderOpen(true);
    addOrderItems()
  };

  const handleBack = () => {
    setOrderOpen(false)
    console.log(orderOpen)
  }

  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <h1>Product List</h1>
        {data.length
          ? data.map((x) => {
              return (
                <Card
                  price={x.price}
                  addToCart={true}
                  id={x._id}
                  image={x.image}
                  name={x.name}
                  description={x.description}
                />
              );
            })
          : // <Card />
            "Loading"}
      </div>
      <div className={style.rightContainer}>
        <h1>Cart Items</h1>
        {!orderOpen
          ? cartItem.map((x) => {
              return (
                <Card
                  price={x.price}
                  addToCart={false}
                  id={x._id}
                  image={x.image}
                  name={x.name}
                  description={x.description}
                />
              );
            })
          : 
          orderItem.length ? orderItem.map(x => {
            return (
                <Card 
                price={x.price}
                  addToCart={false}
                  id={x._id}
                  image={x.image}
                  name={x.name}
                  description={x.description}
                  />
            )
          }) : "No Order"
            }
        { !orderOpen ? (
          <button onClick={() => orderHandler()} className={style.orderBtn}>
            Place Order
          </button>
        ) : (
          <button
            onClick={handleBack}
            className={style.orderBtn}
          >
            BACK
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
