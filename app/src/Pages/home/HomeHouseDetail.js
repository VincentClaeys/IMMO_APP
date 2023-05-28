import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Global/Loading/Loading";
import { useAuthContext } from "../../contexts/AuthContainer";
import useFetch from "../../hooks/useFetch";
import useMutation from "../../hooks/useMutation";
import style from "../home/HomeHouseDetail.module.css";

const HomeHouseDetail = () => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const { mutate } = useMutation();
  const [message, setMessage] = useState("");

  const {
    isLoading: loader,
    error: fault,
    data: house,
  } = useFetch(`/home/${id}`);

  if (fault) {
    return <p>{fault}</p>;
  }

  if (loader) {
    return <Loading />;
  }

  const handleClick = () => {
    mutate(`${process.env.REACT_APP_API_URL}/home/${id}`, {
      method: "POST",
      data: {
        user_id: user.id,
        house_id: id,
      },
      onSuccess: () => {
        window.location.reload();
      },
      credentials: "include",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Stuur de inhoud van de textarea naar de database
    try {
      await mutate(`${process.env.REACT_APP_API_URL}/home/${id}/message`, {
        method: "POST",
        data: {
          user_id: user.id,
          house_id: id,
          message: message,
          office_id: house.office_id,
        },
        onSuccess: () => {
          window.location.reload();
        },
        credentials: "include",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      // Behandel de foutmelding op de gewenste manier
    }
  };

  return (
    <div>

      {user ? (
        <div>
          <div className={style.card}>
        <div className={style.image}></div>
        <div className={style.info}>
          <h1 className={style.titleHouse}>HOUSE</h1>
          <p className={style.streetnameHouse}>
            {house.streetname} {house.housenumber},<b> {house.province}</b>
          </p>
          <p className={style.houseDescription}>{house.description}</p>
          <p className={style.houseDescription}>€{house.price}</p>
          <div className={style.card_button}>
            <button onClick={handleClick} className={style.btn}>
              LIKE
            </button>
          </div>
        </div>
      </div>

      <div className={style.cardMessage}>
        <h1 className={style.titleMessage}>Contact</h1>
        <form className={style.formMessage} onSubmit={handleSubmit}>
          <textarea
            placeholder="Leave a message..."
            className={style.inputMessage}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className={style.buttonMessage}>
            Send
          </button>
        </form>
      </div>
       
      
        </div>
      ) : (
        <div>
        <div className={style.card}>
        <div className={style.image}></div>
        <div className={style.info}>
          <h1 className={style.titleHouse}>HOUSE</h1>
          <p className={style.streetnameHouse}>
            LOG IN TO SEE THE ADRESS
          </p>
          <p className={style.houseDescription}>{house.description}</p>
          <p className={style.houseDescription}>€{house.price}</p>
        </div>
      </div>

        </div>

      )}
     
      <Footer />
    </div>
  );
};

export default HomeHouseDetail;
