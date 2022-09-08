import React from "react";

const ImgsProduct = ({ img }) => {
  return (
    <button className="product__description-btn-img">
      <img src={img} alt="" />
    </button>
  );
};

export default ImgsProduct;
