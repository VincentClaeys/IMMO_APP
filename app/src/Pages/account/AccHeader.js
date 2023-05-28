import { NavLink } from "react-router-dom";
import style from "../account/AccHeader.module.css";
import ROUTES from "../../consts/routes";
import { useAuthContext } from "../../contexts/AuthContainer";

const AccountHeader = () => {
  const { user } = useAuthContext();
  console.log(user);

  return (
    <header className={style.header}>
      <nav>
        <NavLink
          to={ROUTES.account}
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          PROFILE
        </NavLink>
      </nav>

      {user.user_role_id === 1 ? (
        <nav>
          <NavLink
            to={ROUTES.favorites}
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            FAVORITES
          </NavLink>
        </nav>
      ) : user.user_role_id === 2 ? (
        <nav>
          <NavLink
            to={ROUTES.accountUsers}
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            USERS
          </NavLink>
          <NavLink
            to={ROUTES.accountHouses}
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            HOUSES
          </NavLink>
        </nav>
      ) : user.user_role_id === 3 ? (
        <nav>
          <NavLink
            to={ROUTES.accountHouseOffice}
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            HOUSES
          </NavLink>
          <NavLink
            to={ROUTES.messages}
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            MESSAGES
          </NavLink>
          <NavLink
            to={ROUTES.estateOffice}
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            REAL ESTATE OFFICE
          </NavLink>
        </nav>
      ) : (
        <h1>test</h1>
      )}
    </header>
  );
};

export default AccountHeader;
