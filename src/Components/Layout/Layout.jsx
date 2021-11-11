import Header from "../Header/Header";
import Account from "../Account/Account";
import Search from "../Search/Search";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Account />
      <Search />
    </div>
  );
};

export default Layout;
