import { FC } from "react";
import UserCard from "../UserCard/UserCard";

import style from "./style.module.css";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";

const SearchResults: FC = () => {
  const users = useAppSelector((store: RootState) => store.users.users);

  return (
    <ul className={style.usersList}>
      {users.length &&
        users.map((user) => <UserCard key={user.id} {...user} />)}
    </ul>
  );
};

export default SearchResults;
