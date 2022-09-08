import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCartInfo from "../cart/ProductCartInfo";
import getConfig from "../../utils/getConfig";
import "../cart/styles.css";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState();
  const [totalPrice, setTotalPrice] = useState();

  const getAllProducts = () => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";
    axios
      .get(URL, getConfig())
      .then((res) => {
        const products = res.data.data.cart.products;
        setCartProducts(products);
        const total = products.reduce((acc, cv) => {
          return Number(cv.price) * cv.productsInCart.quantity + acc;
        }, 0);
        setTotalPrice(total);
      })
      .catch((err) => err);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleCheckout = () => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases";
    const obj = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references",
    };

    axios
      .post(URL, obj, getConfig())
      .then(() => {
        setTotalPrice(0);
        getAllProducts();
      })
      .catch((err) => console.log(err));
    getAllProducts();
  };

  return (
    <section className="cart">
      <header className="prodct-info__header">
        <NavLink to="/">
          <span className="prodct-info__home">Home</span>
        </NavLink>
        <p></p>
        <span> Cart</span>
      </header>
      <h2 className="title__seccion">Cart</h2>

      {totalPrice ? (
        <section className="cart_content-card">
          {cartProducts?.map((product) => (
            <ProductCartInfo
              key={product.productId}
              product={product}
              getAllProducts={getAllProducts}
            />
          ))}
          <footer className="cart__footer">
            <div>
              <span className="cart__total-global-label">Total</span>
              <p className="cart__total-global-value">$ {totalPrice}</p>
            </div>

            <button onClick={handleCheckout} className="cart__btn">
              Checkout
            </button>
          </footer>
        </section>
      ) : (
        <h2 className="purchase_made">There are no products</h2>
      )}
    </section>
  );
};

export default Cart;
