import Loading from "../../../components/Global/Loading/Loading";
import useFetch from "../../../hooks/useFetch";
import style from "../Account.module.css";
import foto1 from "../../../img/testFOTO.jpg";
import Footer from "../../../components/Footer/Footer";
import AccountHeader from "../AccHeader";

const Favorites = () => {
  const {
    isLoading: loader,
    error: fault,
    data: favorites,
  } = useFetch("/account/favorites");

  if (fault) {
    return <p>{fault}</p>;
  }

  if (loader) {
    return <Loading />;
  }

  // const handleDeleteSuccess = () => {
  //   invalidate();
  // };
  return (
    <div>
      <div className={style.containerFav}>
        <div className={style.containerTwo}>
          <div className={style.tekstContainer}>
            <p className={style.pageTitle}>Favorites.</p>
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
      <div className={style.link_container}>
        <p className={style.Username}>YOUR FAVORITE HOUSES</p>
      </div>
      <div className={style.favoritesContainer}>
        {favorites &&
          favorites.map((favorite) => (
            <div key={favorite.id} className={style.cardHouseFavorite}>
              <img className={style.card_image} src={foto1} alt="" />
              <div className={style.card_info}>
                <h2 className={style.card_title}>Huis</h2>
                <h3 className={style.card_adress}>
                  {favorite.streetname} {favorite.housenumber},{" "}
                  <b>{favorite.province}</b>
                </h3>
                <h3 className={style.card_house_info}>
                  ROOMS , BATHROOMS , M2
                </h3>
                <p className={style.card_text}>{favorite.description}</p>
                <div className={style.card_bottomInfo}>
                  <p className={style.card_price}>€{favorite.price}</p>
                  <button className={style.btnDelete}>delete</button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default Favorites;
