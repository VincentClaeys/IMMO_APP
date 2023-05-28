import { useNavigate } from "react-router";
import Button from "../../../components/Global/Button/Button";
import useMutation from "../../../hooks/useMutation";

const DeleteStudentButton = ({ onSuccess, id }) => {
  const { isLoading, error, mutate } = useMutation();
  const navigate = useNavigate();
  const handleClick = () => {
    mutate(`${process.env.REACT_APP_API_URL}/account/users/${id}`, {
      method: "DELETE",
      onSuccess: () => {
        navigate("/");
      },
      credentials: "include",
    });
  };

  

  console.log(error);

  return (
    <Button color="alert" onClick={handleClick} disabled={isLoading}>
      🗑
    </Button>
  );
};

export default DeleteStudentButton;
