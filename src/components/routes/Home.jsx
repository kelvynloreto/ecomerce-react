import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardHome from "../home/CardHome";
import CategoryFilter from "../home/CategoryFilter";
import InputSearch from "../home/InputSearch";
import PriceFilter from "../home/PriceFilter";

const Home = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [filterProducts, setFilterProducts] = useState();
  const [objFilterPrice, setObjFilterPrice] = useState({})

  const products = useSelector((state) => state.products);

useEffect(() => {
  if (inputSearch.length!== 0) {
    const filter = products?.filter(e=>
      e.title.toLowerCase().includes(inputSearch))
      setFilterProducts(filter)
  }
  else{
    setFilterProducts("")
  }
}, [inputSearch])

useEffect(() => {
  const filter = products?.filter(e=>
    {
      const price = Number(e.price)
      const max = objFilterPrice.to 
      const min = objFilterPrice.from
      if (min && max) {
        return price >= min && price <= max
      }
      else if (min && !max) {
        return price >= min 
      }
      else if (!min && max) {
        return price <= max
      }
      else{
        true
      }
    })
    if (objFilterPrice.to !==  0 && objFilterPrice.from!== 0 ) {
      setFilterProducts(filter)
    }
    setFilterProducts()
}, [objFilterPrice.to, objFilterPrice.from])

  return (
    <div className="home">
      <InputSearch setInputSearch={setInputSearch} />
    <section className="container_filter">
    <CategoryFilter/>
    <PriceFilter setObjFilterPrice={setObjFilterPrice}/>
    </section>
      <div className="home__container-card">
        {
filterProducts? filterProducts.map((product) => (
  <CardHome key={product.id} product={product} />
))
: 
products?.map((product) => (
  <CardHome key={product.id} product={product} />
))
        }
      </div>
    </div>
  );
};

export default Home;
