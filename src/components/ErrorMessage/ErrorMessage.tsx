import { FC } from "react";
import style from "./style.module.css";
import errorImg from "./error.gif";

const ErrorMessage: FC = () => {
  return (
    <div className={style.container}>
      <p className={style.text}>Произошла ошибка</p>
      <img className={style.img} src={errorImg} alt="error" />
    </div>
  );
};

export default ErrorMessage;
