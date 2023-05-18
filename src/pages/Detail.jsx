import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../redux/productSlice";
import Loading from "../components/Loading";
import { addToCart } from "../redux/cartSlice";
const Detail = () => {
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      return;
    }
  };
  const increment = () => {
    if (quantity <= productDetail.rating?.count) {
      setQuantity(quantity + 1);
    } else {
      return;
    }
  };

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        quantity: quantity,
        price: productDetail?.price,
      })
    );
  };
  return (
    <div>
      {productDetailStatus === "LOADING" ? (
        <Loading />
      ) : (
        <div className="detail-side d-flex justify-content-center align-items-center">
          <img src={productDetail.image} alt="" style={{ width: "400px" }} />

          <div className="detail m-5 color-light">
            <h3>{productDetail && productDetail.title}</h3>
            <div>
              <h5 className="h2">Desctiption:</h5>
              <p>{productDetail?.description}</p>
            </div>
            <h4>
              <span className="h2">Stock:</span> {productDetail.rating?.count}
            </h4>
            <h4>
              <span className="h2">Price:</span> {productDetail.price}$
            </h4>

            <div className="basket">
              <div onClick={increment}>+</div>
              <input type="text" value={quantity} disabled />
              <div onClick={decrement}>-</div>
            </div>
            <h3 className="add-basket" onClick={addBasket}>add to basket</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
