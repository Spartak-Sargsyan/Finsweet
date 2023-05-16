import style from "./button.module.css";

const Button = ({ children, disabled }) => {
  return (
    <button disabled={disabled} className={style.btn}>
      {children}
    </button>
  );
};

export default Button;