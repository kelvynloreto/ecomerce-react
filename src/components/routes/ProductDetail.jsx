import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilterSimilProduct from "../productDetail/FilterSimilProduct";
import ProductDescription from "../productDetail/ProductDescription";

export const ProductDetail = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState();
  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`;
    axios
      .get(URL)
      .then((res) => setProductInfo(res.data.data.product))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <ProductDescription productInfo={productInfo} />
      <FilterSimilProduct productInfo={productInfo} />
    </div>
  );
};
