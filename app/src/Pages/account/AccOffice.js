import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Global/Input/Input";
import style from "../account/Account.module.css";
import Loading from "../../components/Global/Loading/Loading";
import useFetch from "../../hooks/useFetch";
import useMutation from "../../hooks/useMutation";
import { useAuthContext } from "../../contexts/AuthContainer";
import AccountHeader from "./AccHeader";


const AccOffice = () => {
    const { logout, user } = useAuthContext();
  const {
    isLoading: loader,
    error: newError,
    data: currentUser,
  } = useFetch("/account/estateOffice");
 
  const [dataUser, setDataUser] = useState({
    username: "",
    password: "",
    user_role_id: "3",
    office_id:user.office_id,
  });

  const [data, setData] = useState({
    name: "",
  });

  const { isLoading, error, mutate } = useMutation();


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
    mutate(`${process.env.REACT_APP_API_URL}/account/estateOffice`, {
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

  const handleChangeUser = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();

    mutate(`${process.env.REACT_APP_API_URL}/account/estateOffice`, {
      method: "POST",
      data:dataUser,
      onSuccess: (data) => {
        window.location.reload();
      },
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

      <div className={style.loginContent_container}>
        <div className={style.link_container}>
          <div className={style.profilePictureOffice}></div>
          <p className={style.Username}>{currentUser.name},</p>

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
              placeholder={currentUser.name}
              type="text"
              name="name"
              onChange={handleChange}
            />
            <button
              className={style.btnLogin}
              type="submit"
              disabled={isLoading}
            >
              Edit Real Estate Office Name
            </button>
          </form>
        </div>
        <button className={style.btnDelete} onClick={handleDelete}>
          Delete User
        </button>
      </div>
      <div className={style.addNewUserOffice}>
        <p className={style.addTitle}>Add New User</p>
        <form onSubmit={handleSubmitUser}>
          {error && (
            <p className={style.error}>
              {error.error || "Username bestaat al."}
            </p>
          )}

          <Input
            placeholder="USERNAME"
            type="text"
            name="username"
            value={dataUser.username}
            onChange={handleChangeUser}
          />

          <Input
            placeholder="PASSWORD"
            type="password"
            name="password"
            value={dataUser.password}
            onChange={handleChangeUser}
          />
          <button
            className={style.btnAdd}
            type="submit"
            disabled={isLoading}
          >
            Register New User
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AccOffice;