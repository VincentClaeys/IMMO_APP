import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Global/Input/Input";
import ROUTES from "../../consts/routes";
import useMutation from "../../hooks/useMutation";
import style from "../Register/Register.module.css"
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    user_role_id:"1",
  });

  const { isLoading, error, mutate } = useMutation();

  const navigate = useNavigate();
  function NavigateToLogin() {
    navigate('/login')
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(`https://${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      data,
      onSuccess: (data) => {
     
        navigate("/login");
     
      },
    });
  };

  return (
    <div>
         <div className={style.loginContent_container}>
          <div className={style.title_container}>
      <Link className={style.name} to={ROUTES.home}>IMMO<b>VC</b></Link> 
      </div>
      <div className={style.link_container}>
      <p className={style.loginTitleTwo}>CREATE NEW ACCOUNT.</p>

      <p className={style.loginText}>Already have an account?<button className={style.btnGoToRegister} onClick={NavigateToLogin}>LOGIN HERE</button></p> 
</div>
      <form onSubmit={handleSubmit}>
      {error && <p className={style.error}>{error}</p>}

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
     <button className={style.btnRegister} type="submit" disabled={isLoading}>
        Register
        </button>
      </form>
   </div>
   <Footer/>
    </div>
  );
};

export default Register;

