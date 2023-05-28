import { Route, Routes } from "react-router-dom";

import ROUTES from "../consts/routes";
import AuthContainer from "../contexts/AuthContainer";
import About from "./about/About";
import AccOffice from "./account/AccOffice";
import Account from "./account/Account";
import AccountHouses from "./account/AccountHouses.js";
import HouseDetail from "./account/AccountHousesDetail";
import AccountHousesOffice from "./account/AccountHousesOffice";
import HouseOfficeDetail from "./account/AccountHousesOfficeDetail";
import UserDetail from "./account/AccountUserDetail";
import AccountUsers from "./account/AccountUsers";
import AddHouse from "./account/AddHouse";
import Favorites from "./account/favorites/favorites";
import AccountHouseMessages from "./account/messages/messages";
import Buy from "./buy/Buy";
import BuyHouseDetail from "./buy/BuyHouseDetail";
import AppHeader from "./Header/AppHeader";
import Home from "./home/Home";
import HomeHouseDetail from "./home/HomeHouseDetail";
import Rent from "./rent/Rent";
import RentHouseDetail from "./rent/RentHouseDetail";
import AddStudent from "./Students/AddStudent";
import StudentDetail from "./Students/Detail/StudentDetail";
import StudentsOverview from "./Students/StudentsOverview";

const App = () => {
  return (
    
    <AuthContainer>
      <AppHeader />
      <Routes>
        <Route path="/students" element={<StudentsOverview />} />
        <Route path={ROUTES.home} element={<Home />} />
        <Route path="/home/:id/*" element={<HomeHouseDetail />} />
        <Route path={ROUTES.aboutus} element={<About />} />
        <Route path={ROUTES.buy} element={<Buy />} />
        <Route path="/buy/:id/*" element={<BuyHouseDetail />} />
        <Route path={ROUTES.account} element={<Account />} />
        <Route path={ROUTES.favorites} element={<Favorites />} />

        <Route path="/account/users" element={<AccountUsers />} />
        <Route path={ROUTES.accountHouses} element={<AccountHouses />} />
        <Route path="/account/housesoffice/add" element={<AddHouse />} />
        <Route path="/account/housesoffice" element={<AccountHousesOffice />} />
        <Route path="/account/messages" element={<AccountHouseMessages />} />
        <Route path="/account/estateOffice" element={<AccOffice />} />
        <Route path="/account/users/:id/*" element={<UserDetail />} />
        <Route path="/account/houses/:id/*" element={<HouseDetail />} />
        <Route path="/account/housesoffice/:id/*" element={<HouseOfficeDetail />} />
        <Route path={ROUTES.rent} element={<Rent />} />
        <Route path="/rent/:id/*" element={<RentHouseDetail />} />
        <Route path="/students/:id/*" element={<StudentDetail />} />
        <Route path="/students/add" element={<AddStudent />} />
      </Routes>


    </AuthContainer>
  );
};

export default App;
