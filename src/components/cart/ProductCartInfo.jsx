import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import getConfig from "../../utils/getConfig";

const ProductCartInfo = ({ product, getAllProducts }) => {
  const [imgProduct, setImgProduct] = useState();

  const products = useSelector((state) => state.products);
  useEffect(() => {
    const img = products?.map((elm) => {
      if (product.title === elm.title) {
        setImgProduct(elm.productImgs[0]);
      }
    });
  }, [products]);

  const handleDelete = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`;

    axios
      .delete(URL, getConfig())
      .then(() => getAllProducts())
      .catch((err) => console.log(err));
  };
  return (
    <article className="cart__item">
      <header className="cart__item-header">
        <div className="cart__item-img">
          <img src={imgProduct} alt="" />
        </div>

        <h4 className="cart__category">{product.brand}</h4>
        <h3 className="cart__name">{product.title}</h3>
      </header>

      <span className="cart__quantity">{product.productsInCart.quantity}</span>
      <div className="cart__item-footer">
        <span className="cart__total-label">Price:</span>
        <p className="cart__total-number">{product.price}</p>
      </div>
      <i
        onClick={handleDelete}
        className="cart__icon-trash fa-regular fa-trash-can"
      ></i>
    </article>
  );
};

export default ProductCartInfo;
