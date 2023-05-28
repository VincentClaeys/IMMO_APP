import Footer from "../../components/Footer/Footer";
import style from "../home/HomePage.module.css";
import foto1 from "../../img/testFOTO.jpg";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useAuthContext } from "../../contexts/AuthContainer";

const Home = () => {
  const { user } = useAuthContext();
  const { error, data: houses } = useFetch("/home");

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={style.homePageContainer}>
      <div className={style.container}>
        <div className={style.containerTwo}>
          <div className={style.tekstContainer}>
            <p className={style.pageTitleOne}>Ons huis, </p>
            <p className={style.pageTitleTwo}>Jouw thuis. </p>
            <p className={style.pageIntro}>
              Welkom bij ImmoVC, een betrouwbare partner voor al uw
              vastgoedtransacties. Wij zijn een gepassioneerd team van
              vastgoedexperts met jarenlange ervaring in de immobiliën sector en
              we zijn er om u te helpen bij elke stap van uw vastgoedtraject.
            </p>
          </div>
        </div>
      </div>

      
        {user ? (
          
          <div className={style.card_container}>
             {houses &&
              houses.map((house) => (
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
                      <Link
                        className={style.btnDetails}
                        to={`/home/${house.id}`}
                      >
                        DETAIL
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              </div>
          
        ) : (
          <div className={style.card_container}>
            {houses &&
              houses.map((house) => (
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
                      <Link
                        className={style.btnDetails}
                        to={`/home/${house.id}`}
                      >
                        DETAIL
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}




<div className={style.parent}>
<div className={style.div1} > </div>
<div className={style.div2}> </div>
<div className={style.div3}> </div>
<div className={style.div4} > </div>
</div>
      

      {/* <div className={style.extraInfo_container}>
        <div className={style.extraInfo}>
          <h2 className={style.extraInfoMark}>?</h2>
          <h2 className={style.extraInfoTitle}>200.000</h2>
          <p className={style.extraInfoText}>KLANTEN GEHOLPEN</p>
        </div>

        <div className={style.extraInfo}>
          <h2 className={style.extraInfoMark}>!</h2>
          <h2 className={style.extraInfoTitle}>150.000</h2>
          <p className={style.extraInfoText}>BEZOEKERS PER DAG</p>
        </div>

        <div className={style.extraInfo}>
          <h2 className={style.extraInfoMark}>+</h2>
          <h2 className={style.extraInfoTitle}>5.000</h2>
          <p className={style.extraInfoText}>TEVREDEN KLANTEN</p>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
