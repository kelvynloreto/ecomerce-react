import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import getConfig from "../../utils/getConfig";
import "./styles/styles.css";

const CardHome = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const hanldeAddCard = (e) => {
    const obj = {
      id: product.id,
      quantity: 1,
    };
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";
    axios
      .post(URL, obj, getConfig())
      .then((res) => res.data)
      .catch((err) => console.error(err));
    e.stopPropagation();
  };

  return (
    <article className="card-home" onClick={handleClick}>
      <header className="card-home__header">
        <img className="card-home__img" src={product.productImgs[0]} alt="" />
      </header>
      <div className="card-home__body">
        <h3 className="card-home__name">{product.title}</h3>
        <section className="card-home__price">
          <h4 className="card-home__price-label">Price</h4>
          <h3 className="card-home__price-value">$ {product.price}</h3>
        </section>
        <button
          onClick={hanldeAddCard}
          className="card-home__btn active__stl-btn"
        >
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </article>
  );
};

export default CardHome;
