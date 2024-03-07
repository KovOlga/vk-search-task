import { FC } from "react";
import UserCard from "../UserCard/UserCard";
import style from "./style.module.css";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const SearchResults: FC = () => {
  const users = useAppSelector((store: RootState) => store.users.users);
  const loading = useAppSelector(
    (store: RootState) => store.users.reqInProccess
  );
  const emptyRes = useAppSelector((store: RootState) => store.users.emptyRes);
  const reqFailed = useAppSelector((store: RootState) => store.users.reqFailed);

  return (
    <ul className={style.usersList}>
      {loading && <Spinner />}
      {!loading && emptyRes && "Упс, никого не нашлось"}
      {!loading &&
        !reqFailed &&
        users.length > 0 &&
        users.map((user) => <UserCard key={user.id} {...user} />)}
      {reqFailed && <ErrorMessage />}
    </ul>
  );
};

export default SearchResults;
