import { FC } from "react";
import UserCard from "../UserCard/UserCard";
import style from "./style.module.css";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";
import Spinner from "../Spinner/Spinner";

const SearchResults: FC = () => {
  const users = useAppSelector((store: RootState) => store.users.users);
  const loading = useAppSelector((store: RootState) => store.users.dataRequest);
  const emptyRes = useAppSelector((store: RootState) => store.users.emptyRes);

  return (
    <ul className={style.usersList}>
      {loading && <Spinner />}
      {!loading && emptyRes && "Упс, никого не нашлось"}
      {!loading &&
        users.length > 0 &&
        users.map((user) => <UserCard key={user.id} {...user} />)}
    </ul>
  );
};

export default SearchResults;
