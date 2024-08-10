import css from "./SearchBox.module.css";


const SearchBox = ({ value, handleFilter }) => {
  return (
    <div className={css.div}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        placeholder="Enter profile name"
        value={value}
        onChange={(е) => {
        handleFilter(е)
        }}
        
      />
    </div>
  );
};

export default SearchBox;

