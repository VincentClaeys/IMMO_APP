
import useMutation from "../../hooks/useMutation";
import style from "../account/Account.module.css";



const DeleteHouseButton = ({ id }) => {
  const { isLoading, mutate } = useMutation();

  const handleClick = () => {
    mutate(`${process.env.REACT_APP_API_URL}/account/houses/${id}`, {
      method: "DELETE",
      onSuccess: () => {
        window.location.reload();
      },
      credentials: "include",
    });
  };

  

 

  return (
    <button  className={style.deleteBtn} color="alert" onClick={handleClick} disabled={isLoading}>
      DELETE
    </button>
  );
};

export default DeleteHouseButton;
