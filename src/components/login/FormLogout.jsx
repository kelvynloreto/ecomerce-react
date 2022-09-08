import React from "react";
import { useSelector } from "react-redux";

const FormLogout = ({ setIsLooged, setShowUser }) => {
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    localStorage.removeItem("token");
    setShowUser(false);
    setIsLooged();
  };

  return (
    <article className="form-logout">
      <i className="form-logout__icon fa-solid fa-user"></i>
      <h2 className="form-logout__username">
        {user?.firstName} {user?.lastName}
      </h2>
      <i className="form-logout__check fa-solid fa-square-check"></i>
      <button onClick={handleClick} className="form-logout__btn">
        Logout
      </button>
    </article>
  );
};

export default FormLogout;
