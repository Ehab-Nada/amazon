import React from "react";
const Product = (props) => {
  return (
    <div className="p-4 m-2 w-80 h-96 bg-white flex flex-col flex-auto ">
      <h1 className="text-3xl pb-2">{props.item.title}</h1>
      <div className="flex-1 flex flex-col justify-center items-center">
        <img
          className="w-fit h-60"
          src={props.item.images[0]}
          alt="smartphones"
        />
      </div>
      <p className="text-xl text-blue-500 cursor-pointer pt-2">Shop Now</p>
    </div>
  );
};

export default Product;
