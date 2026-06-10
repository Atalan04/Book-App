import { IoSearchSharp } from "react-icons/io5";
import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={event => setSearch(event.target.value.toLowerCase())}
      />
      <button>
        <IoSearchSharp onClick={searchHandler} />
      </button>
    </div>
  );
}

export default SearchBox;
