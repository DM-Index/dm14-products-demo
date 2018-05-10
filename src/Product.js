import React from "react";
//import './.css';

const Product = props => {
  console.log("props: ", props);
  const prod = props.prod;
  let { imgUrl, title, price, id } = prod;

  return (
    <div onClick={() => props.selectItem(id)} className="prod-card">
      <img className="card-img" src={imgUrl} />
      <h1>{title}</h1>
      <h3>Price: ${price} </h3>
    </div>
  );
};
export default Product;
