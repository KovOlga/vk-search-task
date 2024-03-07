import { ChangeEvent, FC, FormEvent, useState } from "react";
import style from "./style.module.css";
import closeIcon from "../../assets/icon_close.svg";
import { getUsers } from "../../services/actions";
import { useAppDispatch } from "../../hooks/hooks";

const SearchForm: FC = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clearInput = () => {
    setValue("");
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getUsers(value.trim()));
  };
  return (
    <div className={style.searchForm}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.container}>
          <input
            type="text"
            value={value}
            // ref={ref}
            id="search"
            name="search"
            onChange={onInputChange}
            className={style.input}
            placeholder="Кого вы хотите найти?"
            // onBlur={handleBlur}
          />
          <button onClick={clearInput} className={style.close} type="button">
            <img className={style.close__icon} src={closeIcon} />
          </button>
        </div>

        {/* {state === "error" && (
          <p className={styles["error-message"]}>{errorMessage}</p>
        )} */}
        {/* </div> */}
      </form>
    </div>
  );
};

export default SearchForm;
