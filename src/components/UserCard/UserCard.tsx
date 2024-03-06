import { FC } from "react";
import "./style.css";
import { TUser } from "../types/data";

const UserCard: FC<TUser> = (props) => {
  return (
    <div className="userCard">
      <img className="userPic" src={props.image} />
      <div className="userInfo">
        <div>{`${props.firstName} ${props.lastName}`}</div>
        <div>{props.address.city}</div>
      </div>
    </div>
  );
};

export default UserCard;
