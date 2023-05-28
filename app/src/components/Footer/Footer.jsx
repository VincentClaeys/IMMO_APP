import style from "./Footer.module.css";
import { Link } from 'react-router-dom';
import ROUTES from "../../consts/routes";


const Footer = () => {
    return (
        <footer className={style.footer}>
            <Link className={style.nameFooter} to={ROUTES.home}>IMMO<b>VC</b></Link>
            <p className={style.footerEmail}>noreply@IMMOVC.be</p> 
        </footer>
 

    );
};

export default Footer;