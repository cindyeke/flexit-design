import "./Search.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const searchIcon = <FontAwesomeIcon icon={faSearch} />;

const Search = () => {
  return (
    <div className="layout__search search">
      <input
        type="text"
        placeholder="Find Something..."
        className="search__input"
      />
      <span className="search__icon">{searchIcon}</span>
    </div>
  );
};

export default Search;
