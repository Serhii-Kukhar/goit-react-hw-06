import s from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.searchBox}>
      <p className={s.label}>Find contacts by name</p>
      <input
        className={s.search}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
