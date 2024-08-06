import css from "./SearchBox.module.css";

const SearchBox = ({ value, handleFilter }) => {
  return (
    <div className={css.div}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(evt) => {
          handleFilter(evt.target.value);
        }}
      />
    </div>
  );
};


export default SearchBox;