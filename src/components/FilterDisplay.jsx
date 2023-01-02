import "../styles/filterDisplay.scss";
const FilterDisplay = ({ filterTags, setFilterTags }) => {
  //function to clear tags
  const clearTags = () => {
    setFilterTags([]);
  };

  //function to remove filter from list
  const removeFilterTag = (i) => {
    const newArr = [...filterTags];
    newArr.splice(i, 1);
    setFilterTags(newArr);
  };
  return (
    <div className="filter_display">
      <div className="container">
        <div className="filter_container">
          {filterTags.map((tag, index) => (
            <div className="tag_container" key={index}>
              <span className="tag">{tag}</span>
              <span
                className="btn_delete"
                onClick={() => removeFilterTag(index)}
              >
                X
              </span>
            </div>
          ))}
        </div>
        <div>
          <span className="btn_clear" onClick={clearTags}>
            Clear
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterDisplay;
