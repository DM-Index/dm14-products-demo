import React from "react";
//import './.css';

const Product = props => {
  console.log("props: ", props);
  const prod = props.prod;
  let { imgUrl, title, price, id, selectItem } = prod;
  return (
    <div onClick={() => selectItem(id)} className="prod-card">
      <img className="card-img" src={imgUrl} />
      <h1>{title}</h1>
      <h3>Price: ${price} </h3>
    </div>
  );
};
export default Product;
