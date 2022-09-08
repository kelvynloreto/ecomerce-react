import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardHome from "../home/CardHome";

const FilterSimilProduct = ({ productInfo }) => {
  const products = useSelector((state) => state.products);
  const [productsSimil, setProductsSimil] = useState();

  useEffect(() => {
    const filter = products?.filter(
      (product) => product.category.name === productInfo?.category
    );
    setProductsSimil(filter);
  }, [productInfo]);

  return (
    <div className="filter__cards">
      <h3>Discover similar items</h3>
      <section className="filter__cards-main">
        {productsSimil?.map((product) => {
          if (product.title !== productInfo.title) {
            return <CardHome key={product.id} product={product} />;
          }
        })}
      </section>
    </div>
  );
};

export default FilterSimilProduct;
