import { FC } from "react";
import UserCard from "../UserCard/UserCard";

import "./style.css";
import { useAppSelector } from "../hooks/hooks";
import { RootState } from "../types";

const SearchResults: FC = () => {
  const users = useAppSelector((store: RootState) => store.users.users);

  return (
    <div className="usersList">
      {users.length && users.map((user) => <UserCard {...user} />)}
    </div>
  );
};

export default SearchResults;
