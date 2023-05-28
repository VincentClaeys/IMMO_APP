import Footer from "../../components/Footer/Footer";
import style from "../about/AboutUs.module.css";
import foto1 from "../../img/vince.png";
import foto2 from "../../img/bo.png";
const About = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.containerTwo}>
          <div className={style.tekstContainer}>
            <p className={style.pageTitle}>About Us.</p>
            <p className={style.pageIntro}>
              Welkom bij ImmoVC, een betrouwbare partner voor al uw
              vastgoedtransacties. Wij zijn een gepassioneerd team van
              vastgoedexperts met jarenlange ervaring in de immobiliën sector en
              we zijn er om u te helpen bij elke stap van uw vastgoedtraject.
            </p>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.cardOneInfo}>
          <h1 className={style.CardOneTitle}>WHO ARE WE?</h1>
          <p className={style.cardOneContent}>
            ImmoVC is een toonaangevend platform voor het kopen van huizen. Met
            ons uitgebreide aanbod en samenwerkingen met gerenommeerde
            makelaarskantoren, bieden we een gevarieerde selectie van woningen
            voor elke smaak en budget. Of je nu op zoek bent naar een gezellig
            appartement in de stad, een sfeervolle eengezinswoning in de
            buitenwijken of een luxe villa aan zee, bij ImmoVC vind je jouw
            ideale thuis.
          </p>
        </div>
        <div className={style.image}></div>
      </div>

      <div className={style.card_container}>
        <p className={style.titleTeam}>OUR TEAM.</p>
        <div className={style.cardsTeam}>
          <div className={style.card2}>
            <img className={style.card_image} src={foto1} alt="" />
            <div className={style.card_info}>
              <p className={style.cardName}>VINCENT</p>

              <h3 className={style.cardFunction}>WEB DEVELOPER</h3>
              <p className={style.card_text}>
                verantwoordelijk voor het schrijven van code en het bouwen van
                websites en webapplicaties met behulp van programmeertalen en
                technologieën.
              </p>
            </div>
          </div>
          <div className={style.card2_1}>
            <img className={style.card_image} src={foto2} alt="" />
            <div className={style.card_info}>
              <p className={style.cardName}>BO</p>
              <h3 className={style.cardFunction}>WEB DESIGNER</h3>
              <p className={style.card_text}>
                Een expert in het creëren van aantrekkelijke en functionele
                ontwerpen voor websites, inclusief lay-out, kleurenschema's,
                typografie en afbeeldingen.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
