import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

import Input from "../../components/Global/Input/Input";
import style from "../Login/Login.module.css"
import ROUTES from "../../consts/routes";
import useMutation from "../../hooks/useMutation";

const Login = ({ onLogin }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { isLoading, error, mutate } = useMutation();

  const navigate = useNavigate();
  function NavigateToRegister() {
    navigate('/register')
  }
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      data,
      onSuccess: (data) => {
        onLogin(data);
        navigate("/");
      },
      credentials: "include",
    });


  };

  return (
     <div>
     <div className={style.loginContent_container}>
      <div className={style.title_container}>
      <Link className={style.name} to={ROUTES.home}>IMMO<b>VC</b></Link> 
      </div>
      <div className={style.link_container}>
      <p className={style.loginTitleTwo}>LOGIN TO YOUR ACCOUNT.</p>

      <p className={style.loginText}>Don't have an account yet?<button className={style.btnGoToRegister} onClick={NavigateToRegister}>REGISTER HERE</button></p> 
      </div>
      <div className={style.login_container}>
      <form onSubmit={handleSubmit}>
      {error && <p className={style.error}>{error.error || "Username en of Password zijn fout."}</p>}


        <Input
        placeholder="USERNAME"
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
        />

        <Input
         placeholder="PASSWORD"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
 
      <button className={style.btnLogin} type="submit" disabled={isLoading}>
      Login
      </button>
 
      </form>
      </div>
     
      </div>
      <Footer/>
      </div>
);
};

export default Login;
