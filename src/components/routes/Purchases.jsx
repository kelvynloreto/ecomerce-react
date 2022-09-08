import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getConfig from "../../utils/getConfig";
import PurchasesCart from "../purchases/PurchasesCart";
import "../purchases/styles/styles.css";

const Purchases = () => {
  const [purchases, setPurchases] = useState();
  useEffect(() => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases";

    axios
      .get(URL, getConfig())
      .then((res) => setPurchases(res.data.data.purchases))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="purchases">
      <header className="prodct-info__header">
        <NavLink to="/">
          <span className="prodct-info__home">Home</span>
        </NavLink>
        <p></p>
        <span> Purchases</span>
      </header>
      <h2 className="title__seccion">My Purchases</h2>
      <div>
        {purchases?.map((purchase) => (
          <PurchasesCart key={purchase.id} purchase={purchase} />
        ))}
      </div>
    </main>
  );
};

export default Purchases;
