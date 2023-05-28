import style from "../rent/RentPage.module.css";
import foto1 from "../../img/testFOTO.jpg";
import useFetch from "../../hooks/useFetch";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const Rent = () => {
  const [provinceNameFilter, setProvinceFilter] = useState("");
  const { error, data: houses } = useFetch("/rent");

  if (error) {
    return <p>{error}</p>;
  }
  const filteredHouses = provinceNameFilter
    ? houses.filter((house) =>
        house.province.toLowerCase().includes(provinceNameFilter.toLowerCase())
      )
    : houses;
  return (
    <div className={style.buyHousesPageContainer}>
      <div className={style.container}>
        <div className={style.containerTwo}>
          <div className={style.tekstContainer}>
            <p className={style.pageTitle}>Huren.</p>
            <p className={style.pageIntro}>
              Welkom bij ImmoVC, een betrouwbare partner voor al uw
              vastgoedtransacties. Wij zijn een gepassioneerd team van
              vastgoedexperts met jarenlange ervaring in de immobiliën sector en
              we zijn er om u te helpen bij elke stap van uw vastgoedtraject.
            </p>
          </div>
        </div>
      </div>
      <div className={style.search_container}>
        <input
          className={style.search}
          type="text"
          value={provinceNameFilter}
          onChange={(e) => setProvinceFilter(e.target.value)}
          placeholder="Zoek hier jouw ideale woning"
        />
      </div>

      <div className={style.card_container}>
        {filteredHouses &&
          filteredHouses.map((house) => (
            <div key={house.id} className={style.card}>
              <img className={style.card_image} src={foto1} alt="" />
              <div className={style.card_info}>
                <h2 className={style.card_title}>Huis</h2>
                <h3 className={style.card_adress}>
                  {house.streetname} {house.housenumber},{" "}
                  <b>{house.province}</b>
                </h3>
                <h3 className={style.card_house_info}>
                  ROOMS , BATHROOMS , M2
                </h3>
                <p className={style.card_text}>{house.description}</p>
                <div className={style.card_bottomInfo}>
                  <p className={style.card_price}>€{house.price}</p>
                  <Link className={style.btnDetails} to={`/rent/${house.id}`}>
                    DETAIL
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default Rent;
