import React, { useState } from "react";
import "./styles/styles.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import ImgsProduct from "./ImgsProduct";

const ProductDescription = ({ productInfo }) => {
  const [rotateImg, setRotateImg] = useState(0);
  const [count, setCount] = useState(1);

  const handlePlust = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    count > 1 && setCount(count - 1);
  };

  const handleClickNext = () => {
    if (rotateImg >= 0) {
      setRotateImg(rotateImg + 1);
    }
    if (rotateImg === 2) {
      setRotateImg(0);
    }
  };
  const handleClickBack = () => {
    if (rotateImg <= 2) {
      setRotateImg(rotateImg - 1);
    }
    if (rotateImg === 0) {
      setRotateImg(2);
    }
  };

  const handleAddcart = () => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";
    const obj = {
      id: productInfo.id,
      quantity: count,
    };
    axios
      .post(URL, obj, getConfig())
      .then((res) => setCount(1))
      .catch((err) => console.log(err));
  };

  const price = productInfo?.price * count;
  return (
    <section className="prodct-info">
      <header className="prodct-info__header">
        <NavLink to="/">
          <span className="prodct-info__home">Home</span>
        </NavLink>
        <p></p>
        <span> {productInfo?.title}</span>
      </header>
      <div className="prodct-info-container">
        <div className="prodct-info__imgs">
          <button
            className="prodct-info__btn active__stl-btn"
            onClick={handleClickBack}
          >
            <i className="back fa-solid fa-chevron-up"></i>
          </button>
          <div className="prodct-info__container-imgs">
            <img
              className="prodct-info__img"
              src={productInfo?.productImgs[rotateImg]}
              alt=""
            />
          </div>
          <button
            className="prodct-info__btn active__stl-btn"
            onClick={handleClickNext}
          >
            <i className="next fa-solid fa-chevron-up"></i>
          </button>
          {/* <div className="prodct-info__imgs-footer">
              {
            productInfo?.productImgs.map(img=>
              <ImgsProduct img={img}/>)
              }
            </div> */}
        </div>
        <div className="prodct-info__main">
          <h2 className="prodct-info__name">{productInfo?.title}</h2>
          <p className="prodct-info__description">{productInfo?.description}</p>
          <div className="prodct-info__amount-items">
            <article className="prodct-info__price">
              <h3 className="prodct-info__price-label stl_letter">Price</h3>
              <span className="prodct-info__price-value">$ {price}</span>
            </article>
            <article className="prodct-info__quantity">
              <h3 className="prodct-info__quantity-label stl_letter">
                Quantity
              </h3>
              <div className="prodct-info__quantity-items">
                <button className="active__stl-btn" onClick={handleMinus}>
                  <h4>-</h4>
                </button>
                <div>
                  <h4>{count}</h4>
                </div>
                <button className="active__stl-btn" onClick={handlePlust}>
                  <h4>+</h4>
                </button>
              </div>
            </article>
          </div>
          <button
            className="btn__add-cart active__stl-btn"
            onClick={handleAddcart}
          >
            <h3>Add to cart</h3>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
