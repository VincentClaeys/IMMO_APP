import { createContext, useContext, useEffect, useState } from "react";

import {  Route, Routes, useNavigate } from "react-router-dom";
import ROUTES from "../consts/routes";
import AppHeader from "../Pages/Header/AppHeader";
import Home from "../Pages/home/Home";
import Rent from "../Pages/rent/Rent";
import About from "../Pages/about/About";
import Buy from "../Pages/buy/Buy";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import HomeHouseDetail from "../Pages/home/HomeHouseDetail";
import BuyHouseDetail from "../Pages/buy/BuyHouseDetail";
import RentHouseDetail from "../Pages/rent/RentHouseDetail";


// Define the key used to store the user in local storage
const KEY = "SVS_USER";

// Navigate after logout



// Create a new context object for authentication
const AuthContext = createContext();

// Function to retrieve user object from local storage if it exists
const getUserFromStorage = () => {
  const user = localStorage.getItem(KEY);
  if (user) {
    return JSON.parse(user);
   
  }
  return null;
};



// AuthContainer component that wraps child components with authentication functionality
const AuthContainer = ({ children }) => {

  const navigate = useNavigate();
  function NavigateToHome() {
    navigate('/')
  }
  console.log(children);
  // Initialize user state using the getUserFromStorage function
  const [user, setUser] = useState(getUserFromStorage());


  // useEffect hook to store user object in local storage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(KEY);
    }
  }, [user]);

  // Function to set user state to null when user logs out
  const handleLogout = () => {
    setUser(null);
    NavigateToHome();
    
  };

  // Function to set user state to a user object when user logs in
  const handleLogin = (user) => {
    setUser(user);
  };

  // If user exists, wrap child components with the AuthContext Provider and pass user and logout function as props
  if (user) {
    return (
      <AuthContext.Provider value={{ user: user, logout: handleLogout }}>
        {children}
      </AuthContext.Provider>
    );
  } 
  else {
    return (
      <AuthContext.Provider value={{ user: user}}>
  <AppHeader />
  
    <Routes>
    <Route path={ROUTES.home} element={<Home />} />
    <Route path="/home/:id/*" element={<HomeHouseDetail />} />
    <Route path="/buy/:id/*" element={<BuyHouseDetail />} />
    <Route path="/rent/:id/*" element={<RentHouseDetail />} />
    <Route path={ROUTES.aboutus} element={<About />} />
    <Route path={ROUTES.buy} element={<Buy />} />
    <Route path={ROUTES.rent} element={<Rent />} />
    <Route path={ROUTES.login} element={<Login onLogin={handleLogin}/>} />
    <Route path={ROUTES.register} element={<Register/>} />



  </Routes>

    </AuthContext.Provider>
    );
    
  }

  // If user does not exist, return LoginScreen component and pass handleLogin function as a prop
  ;
};

// Custom hook to access AuthContext in child components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// Export AuthContainer component as default
export default AuthContainer;
