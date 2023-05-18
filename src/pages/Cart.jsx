import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartComp from "../components/cart/CartComp";
import { getCartTotal } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  console.log(carts, totalAmount, itemCount, "carts");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
   
  
  return (
    <div>
      {carts.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div>Total price: {totalAmount}</div>
        </div>
        
      ) : (
        <div className="h4 text-center m-5">Empty Basket...</div>
      )}
    </div>
  );
};

export default Cart;
