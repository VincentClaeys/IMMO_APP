
import useMutation from "../../hooks/useMutation";
import style from "../account/Account.module.css";



const DeleteHouseOfficeButton = ({ id }) => {
  const { isLoading, error, mutate } = useMutation();

  const handleClick = () => {
    mutate(`${process.env.REACT_APP_API_URL}/account/housesoffice/${id}`, {
      method: "DELETE",
      onSuccess: () => {
        window.location.reload();
      },
      credentials: "include",
    });
  };

  

  console.log(error);

  return (
    <button  className={style.deleteBtn} color="alert" onClick={handleClick} disabled={isLoading}>
      DELETE
    </button>
  );
};

export default DeleteHouseOfficeButton;
