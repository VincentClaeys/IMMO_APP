import { Link } from "react-router-dom";
import style from "../account/Account.module.css";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Global/Loading/Loading";
import Footer from "../../components/Footer/Footer";
import DeleteUserButton from "./DeleteUserButton";
import AccountHeader from "../account/AccHeader";
const AccountUsers = () => {
  const {
    isLoading: loader,
    invalidate,
    error: fault,
    data: users,
  } = useFetch("/account/users");

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
        <div className={style.link_container}>
          <p className={style.Username}>MANAGE ALL USERS.</p>
        </div>

        {users.map((user) => (
          <div key={user.id} className={style.user}>
            <div className={style.profile_photo}></div>
            <div className={style.user_details}>
              <h1 className={style.user_details_name}>{user.username}</h1>
              <p className={style.user_details_description}>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam.
              </p>
            </div>
            <div className={style.btnsAction}>
              <button className={style.btnEdit}>
                <Link
                  className={style.btnLink}
                  to={`/account/users/${user.id}`}
                >
                  EDIT
                </Link>
              </button>

              <DeleteUserButton id={user.id} onSuccess={handleDeleteSuccess} />
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default AccountUsers;
