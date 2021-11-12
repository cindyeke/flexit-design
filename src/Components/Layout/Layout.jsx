import { useState } from "react";

import Header from "../Header/Header";
import Account from "../Account/Account";
import Search from "../Search/Search";
import Categories from "../Categories/Categories";
import CardList from "../CardList/CardList";
import "./Layout.scss";

const Layout = () => {
  const [keyword, setKeyword] = useState("");

  const handleClick = (searchValue) => {
    setKeyword(searchValue);
  };

  return (
    <div className="layout">
      <Header />
      {screen.width > 1000 ? (
        <div className="layout__base">
          <section className="layout__heading">
            <Search handleClick={handleClick} />
            <Account />
          </section>
          <section className="layout__content">
            <Categories />
            <CardList keyword={keyword} />
          </section>
        </div>
      ) : (
        <>
          <Search handleClick={handleClick} />
          <Account />
          <Categories />
          <CardList keyword={keyword} />
        </>
      )}
    </div>
  );
};

export default Layout;
