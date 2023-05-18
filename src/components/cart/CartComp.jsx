import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CartComp = ({ cart }) => {
  const shortenedTitle = cart?.title.slice(0, 17);
const dispatch =  useDispatch()
  return (
    <div className="d-flex justify-content-between align-items-center ">
      <img src={cart.image} alt={cart?.title} className="p-2 m-3" style={{width:'100px'}} />
      <div>
        <h4>{shortenedTitle}...</h4>
        <h5>{cart?.description}</h5>
        <h5>
          {cart?.price}$ ({cart?.quantity})
        </h5>
      </div>
      <div
      onClick={()=> dispatch(removeFromCart(cart?.id)) }
        className="h5 bg-warning d-flex align-items-center p-1 mt-3"
        style={{ cursor: "pointer", borderRadius: '10px', height:'50px' }}
      >
        remove basket
      </div>
    </div>
  );
};

export default CartComp;
