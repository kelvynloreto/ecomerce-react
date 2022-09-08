import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/user.slice";

const FormLogin = ({ setShowUser }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users/login`;
    axios
      .post(URL, data)
      .then((res) => {
        dispatch(setUser(res.data.data.user));
        localStorage.setItem("token", res.data.data.token);
        setShowUser(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form className="login__form" onSubmit={handleSubmit(submit)}>
      <h2 className="login__title">
        Welcome! Enter your email and password to continue
      </h2>
      <div className="login__form-test-data">
        <h3>Test data</h3>
        <div className="test-data__email-pass">
          <div>
            <i className="fa-regular fa-envelope"></i>
            <h3>Mery@example.com</h3>
          </div>
          <div>
            <i className="fa-solid fa-user"></i>
            <h3>clave123456</h3>
          </div>
        </div>
      </div>
      <div className="login__div-email">
        <label className="login__label" htmlFor="email">
          Email
        </label>
        <input
          {...register("email")}
          className="login__input"
          type="email"
          id="email"
        />
      </div>
      <div className="login__div-password">
        <label className="login__label" htmlFor="password">
          Password
        </label>
        <input
          {...register("password")}
          className="login__input"
          type="password"
          id="password"
        />
      </div>
      <button className="login__btn active__stl-btn">Login</button>
    </form>
  );
};

export default FormLogin;
