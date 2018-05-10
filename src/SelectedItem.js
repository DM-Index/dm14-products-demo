import React from "react";
//import './.css';

const SelectedItem = ({ imgUrl, title, price, description, unselectItem }) => {
  return (
    <div className="prod-card">
      <span className="btn" onClick={unselectItem}>
        ←
      </span>
      <img className="card-img" src={imgUrl} />
      <h1>{title}</h1>
      <h3>Price: ${price} </h3>
      <h5>{description} </h5>
    </div>
  );
};
export default SelectedItem;
