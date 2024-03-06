import { FC } from "react";
import "./style.css";

const UserCard: FC = (props) => {
  return (
    <div className="userCard">
      {/* <img className="userPic" src={props.image} />
      <div className="userInfo">
        <div>{`${props.firstName} ${props.lastName}`}</div>
        <div>{props.address.city}</div>
      </div> */}
    </div>
  );
};

export default UserCard;
