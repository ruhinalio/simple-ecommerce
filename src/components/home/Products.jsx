import React, { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCategoryProducts } from "../../redux/productSlice";
import Loading from "../Loading";
import ProductCard from "./ProductCard";

const Products = ({ category, sort }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  console.log(sort, "sorting");
  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  return (
    <div className="w-75 p-3 bg-light m-2">
      {productsStatus == "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div>
            {currentItems
              ?.sort((a, b) =>
                sort == "inc" ? a.price - b.price : sort == "dec" ? a.price + b.price : null
              )
              .map((product, id) => {
                return <ProductCard key={id} product={product} />;
              })}
          </div>
          <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Products;
