import css from "./errormessage.module.css";

const ErrorMessage = () => {
  return <p className={css.error}>Request failed. Try again!</p>;
};

export default ErrorMessage;
