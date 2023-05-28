import style from "../Account.module.css";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/Global/Loading/Loading";
import Footer from "../../../components/Footer/Footer";
import AccountHeader from "../AccHeader";

const AccountHouseMessages = () => {
  const {
    isLoading: loader,
    error: fault,
    data: houses,
  } = useFetch("/account/messages");

  if (fault) {
    return <p>{fault}</p>;
  }

  if (loader) {
    return <Loading />;
  }

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
      <AccountHeader />
      <div className={style.loginContent_container}>
        <div className={style.link_container}>
          <p className={style.Username}>SOME MESSAGES</p>
        </div>

        {houses.map((house) => (
          <div key={house.id} className={style.cardQuestion}>
            <div className={style.sender}>{house.sender}</div>
            <div className={style.receiver}>to {house.receiver}</div>
           <hr />
            <p className={style.streetNameMessage}>{house.streetname}{house.housenumber}, <b>{house.province}</b></p>
            <div className={style.message}>{house.message}</div>
         
          </div>
         
        ))}
      </div>
 

      <Footer />
    </div>
  );
};

export default AccountHouseMessages;
