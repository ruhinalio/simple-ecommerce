import React from "react";
import { useEffect } from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../../../redux/cartSlice";
const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemCount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div className="d-flex align-items-center ">
      <div className="border border-dark p-1 rounded bg-secondary">
        <input
          type="text"
          placeholder="search"
          className="border-0 bg-secondary text-white "
        />
        <AiOutlineSearch className="h4" />
      </div>
      <AiOutlineHeart className="h4 " />
      <div
        onClick={() => navigate("cart")}
        className="position-relative display-flex justify-content-center"
      >
        <SlBasket className="position-absalute m-2 h4" />
        {itemCount}
      </div>
    </div>
  );
};

export default NavbarRight;
