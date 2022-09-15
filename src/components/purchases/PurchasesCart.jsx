import React from "react";
import ProductPurchases from "./ProductPurchases";

const PurchasesCart = ({ purchase }) => {

  return (
    <article className="purchase__card">
      <h3 className="purchase__card-date">{purchase.createdAt}</h3>
      <ul className="purchase__card-body">
        {purchase.cart.products.map((product) => (
          <ProductPurchases product={product} key={product.id} />
        ))}
      </ul>
    </article>
  );
};

export default PurchasesCart;
