import { Link } from "react-router-dom";
import style from "../account/Account.module.css";
import AccountHeader from "../account/AccHeader";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Global/Loading/Loading";
import Footer from "../../components/Footer/Footer";
import DeleteHouseOfficeButton from "./DeleteHouseOfficeButton";

const AccountHousesOffice = () => {
  const {
    isLoading: loader,
    invalidate,
    error: fault,
    data: houses,
  } = useFetch("/account/housesoffice");

  if (fault) {
    return <p>{fault}</p>;
  }

  if (loader) {
    return <Loading />;
  }

  const handleDeleteSuccess = () => {
    invalidate();
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
          <p className={style.Username}>MANAGE SPECIFIC HOUSES.</p>
        </div>
        <Link className={style.btnAdd} to={`/account/housesoffice/add`}>
                    ADD NEW HOUSE
                  </Link>

        {houses.map((house) => (
          <div key={house.id}className={style.house}>
            <div className={style.profile_photo_house}></div>
            <div className={style.house_details}>
              <h1 className={style.house_details_name}>{house.streetname}</h1>
              <h1 className={style.house_office}>{house.name}</h1>
              <p className={style.house_details_description}>
                Ut enim ad minima veniam, quis nostrum exercitationem.
              </p>
            </div>
            <div>
              <p className={style.housePrice}>€{house.price}</p>
              <div className={style.btnsHouses}>
                <button className={style.btnEditHouse}>
                  <Link
                    className={style.btnLinkHouse}
                    to={`/account/housesoffice/${house.id}`}
                  >
                    EDIT
                  </Link>
                </button>

                <DeleteHouseOfficeButton
                  id={house.id}
                  onSuccess={handleDeleteSuccess}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default AccountHousesOffice;
