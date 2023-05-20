import { useDispatch, useSelector } from "react-redux";
import {add, remove} from "../store/cartSlice"
import "./ProductCard.css";
import { useEffect, useState } from "react";

export const ProductCard = ({product}) => {
  const {id, name, price, image} = product;
  const dispatch = useDispatch()
  const Cart = useSelector(state=> state.cartState.cartList)
  const [isInit, setIsInit] = useState(false)

  useEffect(()=>{
    const isInProduct = Cart.find(item=>item.id === id)

      if(isInProduct){
          setIsInit(true)
      }else{
        setIsInit(false)
      }
  },[Cart, id])
  

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInit ? (<button className="remove" onClick={()=>dispatch(remove(product))} >Remove</button>)  : (<button onClick={()=>dispatch(add(product))} >Add To Cart</button>)}
        
      </div>
    </div>
  )
}
