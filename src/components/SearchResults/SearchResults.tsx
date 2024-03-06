import { FC, useContext, useEffect } from "react";
import { SearchContext } from "./SearchContext";
import UserCard from "../UserCard/UserCard";

import "./style.css";

const SearchResults: FC = () => {
  // const { users } = useContext(SearchContext);

  useEffect(() => {
    fetch("https://dummyjson.com/users/search?q=John")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div className="usersList">
      {/* {users.map((user) => (
        <UserCard {...user} />
      ))} */}
    </div>
  );
};

export default SearchResults;
