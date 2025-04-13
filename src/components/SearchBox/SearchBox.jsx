import styles from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.name);
  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        placeholder="Enter name"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
