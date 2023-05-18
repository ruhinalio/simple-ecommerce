import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({setCategory}) => {
  const dispacth = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useState(() => {
    dispacth(getCategories());
  }, [dispacth]);
  return <div className="w-25 p-3 bg-light m-2">
    <div className="category ">
      <h2 className="display-5">Category</h2>
      {
        categories?.map((a,i)=>{
         return <div key={i} className=" categories-side h5 p-2 m-1" onClick={()=> setCategory(a)}>{a}</div>
        })
      }
    </div>
  </div>;
};

export default Category;
