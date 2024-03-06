import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./styles.module.css";
import closeIcon from "../../assets/icon_close.svg";

const SearchForm: FC = () => {
  const [value, setValue] = useState<string>("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const clearInput = () => {
    setValue("");
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div className="searchForm">
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <label htmlFor="search" className={styles.label}>
            Поиск
          </label>
          <input
            type="text"
            value={value}
            // ref={ref}
            id="search"
            name="search"
            onChange={onInputChange}
            className={styles.input}
            placeholder="Введите имя"
            // onBlur={handleBlur}
          />
          <button onClick={clearInput} className={styles.close} type="button">
            <img className={styles.close__icon} src={closeIcon} />
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
