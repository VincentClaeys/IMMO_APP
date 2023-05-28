import style from "../Header/Header.module.css";
import {  useNavigate } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";
import ROUTES from "../../../consts/routes";
import { useAuthContext } from "../../../contexts/AuthContainer";

const Header = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    logout();
  };



  return (
    <header className={style.header}>
      <Link className={style.name} to={ROUTES.home}>IMMO<b>VC</b></Link> 
      <nav>
                <NavLink 
                    to={ROUTES.home}
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    HOME
                </NavLink>
                <NavLink 
                    to={ROUTES.buy}
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    BUY
                </NavLink>
                <NavLink 
                    to={ROUTES.rent}
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    RENT
                </NavLink>
                <NavLink 
                    to={ROUTES.aboutus}
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    ABOUT US
                </NavLink>
            </nav>
  

      {user ? (
        <div>
          <nav>
             <NavLink 
                    to={ROUTES.account}
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    ACCOUNT
                </NavLink>
                <button className={style.btnLogout} onClick={handleLogout}>Logout</button>
                </nav>
       
      
        </div>
      ) : (
        <button className={style.btnLogout} onClick={navigateLogin}>Login</button>
      )}
    </header>
  );
};

export default Header;
