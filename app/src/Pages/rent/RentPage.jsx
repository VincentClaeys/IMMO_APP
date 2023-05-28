import Header from "../../components/Global/Header/Header";
import style from "./RentPage.module.css";

function RentHouses() {

  
   

    return (
        <div className={style.container}>

        <Header/>
       
       <div className={style.containerTwo}> 
       <div className={style.tekstContainer}>
       <p className={style.pageTitle}>Huren.</p>
       <p className={style.pageIntro}>Welkom bij ImmoVC, een betrouwbare partner voor al uw vastgoedtransacties. Wij zijn een gepassioneerd team van vastgoedexperts met jarenlange ervaring in de immobiliën sector en we zijn er om u te helpen bij elke stap van uw vastgoedtraject.</p>
       </div>
       </div>
    
       </div>
  
   
    )
  }
  
  export default RentHouses