import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Global/Input/Input";
import style from "../account/Account.module.css";
import Loading from "../../components/Global/Loading/Loading";
import useFetch from "../../hooks/useFetch";
import useMutation from "../../hooks/useMutation";
import { useAuthContext } from "../../contexts/AuthContainer";
import AccountHeader from "./AccHeader";

const Profile = () => {
  const {
    isLoading: loader,
    error: newError,
    data: currentUser,
  } = useFetch("/account");
  const [data, setData] = useState({
    username: "",
  });
  const { isLoading, error, mutate } = useMutation();
  const { logout } = useAuthContext();

  if (newError) {
    return <p>{newError}</p>;
  }

  if (loader) {
    return <Loading />;
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(`${process.env.REACT_APP_API_URL}/account`, {
      method: "PATCH",
      data,
      onSuccess: () => {
        window.location.reload();
      },
      credentials: "include",
    });
  };

  const handleDelete = () => {
    mutate(`${process.env.REACT_APP_API_URL}/account/${currentUser.id}`, {
      method: "DELETE",
      onSuccess: () => {
        logout();
      },
      credentials: "include",
    });
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style.containerTwo}>
          <div className={style.tekstContainer}>
            <p className={style.pageTitleRole}>{currentUser.role}</p>
            <p className={style.pageTitle}>Dashboard.</p>
            <p className={style.pageIntro}>
              Welkom bij ImmoVC, een betrouwbare partner voor al uw
              vastgoedtransacties. Wij zijn een gepassioneerd team van
              vastgoedexperts met jarenlange ervaring in de immobiliën sector en
              we zijn er om u te helpen bij elke stap van uw vastgoedtraject.
            </p>
          </div>
        </div>
      </div>
      <AccountHeader />

      {currentUser.role === "User" && (
        <div className={style.loginContent_container}>
          <div className={style.link_container}>
            <p className={style.Username}>{currentUser.username},</p>
            <p className={style.loginTitleTwo}>CHANGE YOUR ACCOUNT.</p>
          </div>

          <div className={style.login_container}>
            <form onSubmit={handleSubmit}>
              {error && (
                <p className={style.error}>
                  {error.error || "Username bestaat al."}
                </p>
              )}

              <Input
                placeholder={currentUser.username}
                type="text"
                name="username"
                onChange={handleChange}
              />
              <button
                className={style.btnLogin}
                type="submit"
                disabled={isLoading}
              >
                Edit username
              </button>
            </form>
          </div>
          <button className={style.btnDelete} onClick={handleDelete}>
            Delete User
          </button>
        </div>
      )}
      {currentUser.role === "Real Estate Office" && (
        <div className={style.loginContent_container}>
          <div className={style.link_container}>
            <p className={style.Username}>{currentUser.username},</p>
            <p className={style.OfficeName}>from {currentUser.name}.</p>
            <p className={style.loginTitleTwo}>CHANGE YOUR ACCOUNT.</p>
          </div>
          <div className={style.login_container}>
            <form onSubmit={handleSubmit}>
              {error && (
                <p className={style.error}>
                  {error.error || "Username bestaat al."}
                </p>
              )}

              <Input
                placeholder={currentUser.username}
                type="text"
                name="username"
                onChange={handleChange}
              />
              <button
                className={style.btnLogin}
                type="submit"
                disabled={isLoading}
              >
                Edit username
              </button>
            </form>
          </div>
          <button className={style.btnDelete} onClick={handleDelete}>
            Delete User
          </button>
        </div>
      )}
      {currentUser.role === "Admin" && (
        <div className={style.loginContent_container}>
          <div className={style.title_container}></div>
          <div className={style.link_container}>
            <p className={style.Username}>{currentUser.username},</p>
            <p className={style.loginTitleTwo}>CHANGE YOUR ACCOUNT.</p>
          </div>
          <div className={style.login_container}>
            <form onSubmit={handleSubmit}>
              {error && (
                <p className={style.error}>
                  {error.error || "Username bestaat al."}
                </p>
              )}

              <Input
                placeholder={currentUser.username}
                type="text"
                name="username"
                onChange={handleChange}
              />
              <button
                className={style.btnLogin}
                type="submit"
                disabled={isLoading}
              >
                Edit username
              </button>
            </form>
          </div>
          <button className={style.btnDelete} onClick={handleDelete}>
            Delete User
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Profile;
