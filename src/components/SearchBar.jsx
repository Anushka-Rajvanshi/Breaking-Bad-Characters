import React from "react";
import CategoryLabel from "./CategoryLabel";

function SearchBar(props) {
  const handleQuery = (event) => props.getQuery(event.target.value);

  const handleFilter = (value) => props.getFilter(value);

  return (
    <form className="searchForm">
      <div className="formRow">
        <input
          type="text"
          placeholder="Search any character by Name"
          className="searchBar"
          onChange={handleQuery}
        ></input>
      </div>
      <div className="formRow">
        <label className="formLabel">Category:</label>
        <CategoryLabel value="Breaking+Bad" name="Breaking Bad" onClick={handleFilter}/>
        <CategoryLabel value="Better+call+Saul" name="Better Call Saul" onClick={handleFilter}/>
        <CategoryLabel value="" name="Both" onClick={handleFilter} />
      </div>
    </form>
  );
}

export default SearchBar;
