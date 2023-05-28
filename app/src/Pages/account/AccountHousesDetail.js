import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Global/Loading/Loading";
import AccountHeader from "../account/AccHeader";
import useFetch from "../../hooks/useFetch";
import style from "../account/Account.module.css";
import useMutation from "../../hooks/useMutation";
import { useState } from "react";
import Input from "../../components/Global/Input/Input";

const HouseDetail = () => {
  const { id } = useParams();

  const {
    isLoading: loader,
    error: fault,
    data: house,
  } = useFetch(`/account/houses/${id}`);
  const [data, setData] = useState({
    streetname: "",
  });
  const { isLoading, error, mutate } = useMutation();

  if (fault) {
    return <p>{fault}</p>;
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
    mutate(`${process.env.REACT_APP_API_URL}/account/houses/${house.id}`, {
      method: "PATCH",
      data,
      onSuccess: () => {
        window.location.reload();
      },
      credentials: "include",
    });
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style.containerTwo}>
          <div className={style.tekstContainer}>
            <p className={style.pageTitleRole}>Admin</p>
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
      <AccountHeader/>
      <div className={style.loginContent_container}>
        <div className={style.house_photoEdit}></div>
        <div className={style.link_container}>
          <p className={style.UsernameEdit}>
            {house.streetname} {house.housenumber}.
          </p>
          <p className={style.province}>{house.province}.</p>
        </div>
        <form onSubmit={handleSubmit}>
          {error && (
            <p className={style.error}>
              {error.error || "Address can't be used."}
            </p>
          )}

          <Input
            placeholder={house.streetname}
            type="text"
            name="streetname"
            onChange={handleChange}
          />
          <button
            className={style.btnEditUsername}
            type="submit"
            disabled={isLoading}
          >
            Edit house
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default HouseDetail;
