import React, { useEffect, useState } from "react";
import FormLogin from "../login/FormLogin";
import FormLogout from "../login/FormLogout";
import "../login/styles/styles.css";

const Login = () => {
  const [isLogged, setIsLooged] = useState();
  const [showUser, setShowUser] = useState(false);
  useEffect(() => {
    setIsLooged(localStorage.getItem("token"));
  }, []);

  return (
    <main className="login">
      {showUser || isLogged ? (
        <FormLogout
          setIsLooged={setIsLooged}
          isLogged={isLogged}
          setShowUser={setShowUser}
        />
      ) : (
        <FormLogin setIsLooged={setIsLooged} setShowUser={setShowUser} />
      )}
    </main>
  );
};

export default Login;
