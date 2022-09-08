import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import { ProductDetail } from "./components/routes/ProductDetail";
import Login from "./components/routes/Login";
import Purchases from "./components/routes/Purchases";
import Header from "./components/shared/header/Header";
import { useEffect } from "react";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./store/slices/products.slice";
import Cart from "./components/routes/Cart";
import Footer from "./components/shared/footer/Footer";

function App() {
  // useEffect(() => {
  //   const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users`;
  //   const obj = {
  //     firstName: "Mery",
  //     lastName: "Example",
  //     email: "Mery@example.com",
  //     password: "clave123456",
  //     phone: "1234567890",
  //     role: "admin",
  //   };
  //   axios
  //     .post(URL, obj)
  //     .then((res) => res.data)
  //     .catch((error) => console.log(error));
  // }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/product/:id/" element={<ProductDetail />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/purchases/" element={<Purchases />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
