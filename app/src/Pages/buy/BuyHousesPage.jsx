import Header from "../../components/Global/Header/Header"
import style from "./BuyHousesPage.module.css";
import Footer from "../../components/Global/Footer/Footer";
import foto1 from "../../img/testFOTO.jpg";
import { Link } from 'react-router-dom';
import ROUTES from '../../consts/routes';
import axios from 'axios';
import React, { useState } from 'react';
function BuyHousesPage() {
     const [data, setData] = useState(null);
     const getUser = () => {
          axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3003/buy",
          }).then((res) => {
            setData(res.data);
            console.log(res.data);
          });
        };

    return (
      <div className={style.buyHousesPageContainer}>

      <div className={style.container}>
                          
       <Header/>
     
       <div className={style.containerTwo}> 
       <div className={style.tekstContainer}>
            <p className={style.pageTitle}>Kopen.</p>
            <p className={style.pageIntro}>Welkom bij ImmoVC, een betrouwbare partner voor al uw vastgoedtransacties. Wij zijn een gepassioneerd team van vastgoedexperts met jarenlange ervaring in de immobiliën sector en we zijn er om u te helpen bij elke stap van uw vastgoedtraject.</p>
       </div>
       </div>
     </div>

     <div className={style.card_contentContainerBuy}>

          <input className={style.search} type="text" placeholder="Zoek hier jouw ideale woning" />


     <div className={style.card_container}>
    
    <div className={style.card}>
    <img className={style.card_image} src={foto1} alt="" />
    {/* <div className={style.card_image} ></div> */}
    <div className={style.card_info}>
           <h2 className={style.card_title}>Huis</h2>
           <h3 className={style.card_adress}>Kamerijkstraat 50, <b>00ST-VLAANDEREN</b></h3>
           <h3 className={style.card_house_info}>ROOMS , BATHROOMS , M2</h3>
           <p className={style.card_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dolor ac nunc volutpat pulvinar.</p>
      <div className={style.card_bottomInfo}>
           <p className={style.card_price}>€1.000.000</p>
           <Link className={style.btnDetails} to={ROUTES.buy}>DETAIL</Link>
      </div>
    </div>
    </div>  

    <div className={style.card}>
    <img className={style.card_image} src={foto1} alt="" />
    {/* <div className={style.card_image} ></div> */}
    <div className={style.card_info}>
           <h2 className={style.card_title}>Huis</h2>
           <h3 className={style.card_adress}>Kamerijkstraat 50, <b>00ST-VLAANDEREN</b></h3>
           <h3 className={style.card_house_info}>ROOMS , BATHROOMS , M2</h3>
           <p className={style.card_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dolor ac nunc volutpat pulvinar.</p>
      <div className={style.card_bottomInfo}>
           <p className={style.card_price}>€1.000.000</p>
           <Link className={style.btnDetails} to={ROUTES.buy}>DETAIL</Link>
      </div>
    </div>
    </div>  

    <div className={style.card}>
    <img className={style.card_image} src={foto1} alt="" />
    {/* <div className={style.card_image} ></div> */}
    <div className={style.card_info}>
           <h2 className={style.card_title}>Huis</h2>
           <h3 className={style.card_adress}>Kamerijkstraat 50, <b>00ST-VLAANDEREN</b></h3>
           <h3 className={style.card_house_info}>ROOMS , BATHROOMS , M2</h3>
           <p className={style.card_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dolor ac nunc volutpat pulvinar.</p>
      <div className={style.card_bottomInfo}>
           <p className={style.card_price}>€1.000.000</p>
           <Link className={style.btnDetails} to={ROUTES.buy}>DETAIL</Link>
      </div>
    </div>
    </div>  

    <div className={style.card}>
    <img className={style.card_image} src={foto1} alt="" />
    {/* <div className={style.card_image} ></div> */}
    <div className={style.card_info}>
           <h2 className={style.card_title}>Huis</h2>
           <h3 className={style.card_adress}>Kamerijkstraat 50, <b>00ST-VLAANDEREN</b></h3>
           <h3 className={style.card_house_info}>ROOMS , BATHROOMS , M2</h3>
           <p className={style.card_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dolor ac nunc volutpat pulvinar.</p>
      <div className={style.card_bottomInfo}>
           <p className={style.card_price}>€1.000.000</p>
           <Link className={style.btnDetails} to={ROUTES.buy}>DETAIL</Link>
      </div>
    </div>
    </div>  

    <div className={style.card}>
    <img className={style.card_image} src={foto1} alt="" />
    {/* <div className={style.card_image} ></div> */}
    <div className={style.card_info}>
           <h2 className={style.card_title}>Huis</h2>
           <h3 className={style.card_adress}>Kamerijkstraat 50, <b>00ST-VLAANDEREN</b></h3>
           <h3 className={style.card_house_info}>ROOMS , BATHROOMS , M2</h3>
           <p className={style.card_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dolor ac nunc volutpat pulvinar.</p>
      <div className={style.card_bottomInfo}>
           <p className={style.card_price}>€1.000.000</p>
           <Link className={style.btnDetails} to={ROUTES.buy}>DETAIL</Link>
      </div>
    </div>
    </div>  

    <div className={style.card}>
    <img className={style.card_image} src={foto1} alt="" />
    {/* <div className={style.card_image} ></div> */}
    <div className={style.card_info}>
           <h2 className={style.card_title}>Huis</h2>
           <h3 className={style.card_adress}>Kamerijkstraat 50, <b>00ST-VLAANDEREN</b></h3>
           <h3 className={style.card_house_info}>ROOMS , BATHROOMS , M2</h3>
           <p className={style.card_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dolor ac nunc volutpat pulvinar.</p>
      <div className={style.card_bottomInfo}>
           <p className={style.card_price}>€1.000.000</p>
           <Link className={style.btnDetails} to={ROUTES.buy}>DETAIL</Link>
      </div>
    </div>
    </div>  
</div>


     </div>

     <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div>

     
     <Footer/>
  
     </div>
  
   
    )
  }
  
  export default BuyHousesPage