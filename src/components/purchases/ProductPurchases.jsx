import React from "react";

const ProductPurchases = ({ product }) => {
  const total = product.price * product.productsInCart.quantity;
  return (
    <li className="purchase-card-item">
      <h4 className="purchase-card__name">{product.title}</h4>
      <span className="purchase-card__quantity">
        {product.productsInCart.quantity}{" "}
      </span>
      <span className="purchase-card__price">$ {total}</span>
    </li>
  );
};

export default ProductPurchases;
