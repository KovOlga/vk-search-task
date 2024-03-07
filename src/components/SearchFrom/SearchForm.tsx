import { ChangeEvent, FC, FormEvent, useState } from "react";
import style from "./style.module.css";
import closeIcon from "../../assets/icon_close.svg";
import { getUsers } from "../../services/actions";
import { useAppDispatch } from "../../hooks/hooks";

const regex = /[A-Za-z]/gim;

const SearchForm: FC = () => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });
  const dispatch = useAppDispatch();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clearInput = () => {
    setValue("");
    setError(() => {
      return { isError: false, errorMessage: "" };
    });
  };
  const validateInput = () => {
    if (!value) {
      setError(() => {
        return { isError: true, errorMessage: "Необходимо заполнить имя" };
      });
      return false;
    } else if (!value.match(regex)) {
      setError(() => {
        return { isError: true, errorMessage: "В имени не хватает букв" };
      });
      return false;
    }
    return true;
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateInput()) {
      setError(() => {
        return { isError: false, errorMessage: "" };
      });
      dispatch(getUsers(value.trim()));
    }
  };
  return (
    <div className={style.searchForm}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.container}>
          <input
            type="text"
            value={value}
            id="search"
            name="search"
            onChange={onInputChange}
            className={style.input}
            placeholder="Кого вы хотите найти?"
          />
          <button onClick={clearInput} className={style.close} type="button">
            <img className={style.close__icon} src={closeIcon} />
          </button>
        </div>

        {error.isError && <p className={style.error}>{error.errorMessage}</p>}
      </form>
    </div>
  );
};

export default SearchForm;
