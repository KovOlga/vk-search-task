import { FC } from "react";
import style from './style.module.css';
import { TUser } from "../../types/data";

const UserCard: FC<TUser> = (props) => {
  return (
    <li className={style.userCard}>
      <img className={style.userPic} src={props.image} />
      <div className={style.userInfo}>
        <div>{`${props.firstName} ${props.lastName}`}</div>
        <div>{props.address.city}</div>
      </div>
    </li>
  );
};

export default UserCard;
