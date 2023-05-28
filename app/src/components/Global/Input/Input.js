import "./Input.css";

const Input = ({ type, name, value,placeholder, onChange, disabled = false }) => {
  return (
    <input
    placeholder={placeholder}
      className="input"
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;
