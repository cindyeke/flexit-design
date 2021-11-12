import { useState } from "react";

import "./Search.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const searchIcon = <FontAwesomeIcon icon={faSearch} />;

const Search = ({ handleClick }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="layout__search search">
      <input
        type="text"
        placeholder="Find Something..."
        className="search__input"
        onChange={handleChange}
        value={searchValue}
      />
      <span className="search__icon">{searchIcon}</span>
      <button className="search__btn" onClick={() => handleClick(searchValue)}>
        Search
      </button>
    </div>
  );
};

export default Search;
