import { useNavigate } from "react-router-dom";
import style from "../account/Account.module.css";
import AccountHeader from "../account/AccHeader";

import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import useMutation from "../../hooks/useMutation";
import Input from "../../components/Global/Input/Input";
import { useAuthContext } from "../../contexts/AuthContainer";

const AddHouse = () => {
    const {user}  = useAuthContext();
    const [data, setData] = useState({
        streetname: "",
        housenumber: "",
        province: "",
        price: "",
        description: "",
        office_id:user.office_id,
        img:
        "https://picsum.photos/200/300",

      });

    
      const { isLoading, error, mutate } = useMutation();
      const navigate = useNavigate();

const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(`${process.env.REACT_APP_API_URL}/account/housesoffice/add`, {
      method: "POST",
      data,
      onSuccess: (data) => {
     
        navigate("/");
     
      },
    });
  };
  return (
    <div>
      <div className={style.container}>
        <div className={style.containerTwo}>
          <div className={style.tekstContainer}>
            <p className={style.pageTitleRole}>Real Estate Office</p>
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
        <div className={style.link_container}>
          <p className={style.Username}>ADD NEW HOUSE.</p>
        </div>
        <form onSubmit={handleSubmit}>
      {error && <p className={style.error}>{error}</p>}
      <Input
          placeholder="STREETNAME"
          type="text"
          name="streetname"
          value={data.streetname}
          onChange={handleChange}
        />
   
        <Input
          placeholder="NUMBER"
          type="number"
          name="housenumber"
          value={data.housenumber}
          onChange={handleChange}
        />
        
          <Input
          placeholder="PROVINCE"
          type="text"
          name="province"
          value={data.province}
          onChange={handleChange}
        />
            <Input
          placeholder="PRICE"
          type="number"
          name="price"
          value={data.price}
          onChange={handleChange}
        />
 
       
         <textarea  name="description" placeholder="Leave a message..." className={style.description} value={data.description} onChange={handleChange}></textarea>
     <button className={style.btnAdd} type="submit" disabled={isLoading}>
        Add new House
        </button>
      </form>
       
      </div>

      <Footer />
    </div>
  );
};

export default AddHouse;
