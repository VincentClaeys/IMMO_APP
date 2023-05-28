import { useState } from "react";
import Button from "../../../components/Global/Button/Button";
import Input from "../../../components/Global/Input/Input";

const StudentForm = ({ onSubmit, isDisabled, label, initialData = {} }) => {
  const [data, setData] = useState({
    username: "",

    ...initialData,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <Input
      name="username"
          value={data.username}onChange={handleChange} />

      <Button type="submit" disabled={isDisabled}>
        {label}
      </Button>
    </form>
  );
};

export default StudentForm;
