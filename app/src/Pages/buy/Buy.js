import style from "../buy/BuyHousesPage.module.css";
import Footer from "../../components/Footer/Footer";
import foto1 from "../../img/testFOTO.jpg";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContainer";

const Buy = () => {
  const { user } = useAuthContext();
  const [provinceNameFilter, setProvinceFilter] = useState("");
  const { error, data: houses } = useFetch("/buy");

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
            <p className={style.pageTitle}>Kopen.</p>

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
      {user ? (
        <div className={style.card_container}>
          {filteredHouses &&
            filteredHouses.map((house) => (
              <div key={house.id} className={style.card}>
                <img className={style.card_image} src={foto1} alt="" />
                <div className={style.card_info}>
                  <p className={style.card_price}>€{house.price}</p>
                  <h1 className={style.card_province}>{house.province}</h1>
                  <h3 className={style.card_adress}>
                    {house.streetname} {house.housenumber},{" "}
                    <b>{house.province}</b>
                  </h3>
                  <h3 className={style.card_house_info}>
                    ROOMS , BATHROOMS , M2
                  </h3>
                  <p className={style.card_text}>{house.description}</p>
                  <div className={style.card_bottomInfo}>
                    <p className={style.officeNameCard}>{house.office_name}</p>
                    <Link className={style.btnDetails} to={`/home/${house.id}`}>
                      DETAIL
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className={style.card_container}>
          {filteredHouses &&
            filteredHouses.map((house) => (
              <div key={house.id} className={style.card}>
                <img className={style.card_image} src={foto1} alt="" />
                <div className={style.card_info}>
                  <p className={style.card_price}>€{house.price}</p>
                  <h1 className={style.card_province}>{house.province}</h1>
                  <h3 className={style.card_adress}>
                    LOG IN TO SEE THE ADRESS
                  </h3>
                  <h3 className={style.card_house_info}>
                    ROOMS , BATHROOMS , M2
                  </h3>
                  <p className={style.card_text}>{house.description}</p>
                  <div className={style.card_bottomInfo}>
                    <p className={style.officeNameCard}>{house.office_name}</p>
                    <Link className={style.btnDetails} to={`/home/${house.id}`}>
                      DETAIL
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Buy;
