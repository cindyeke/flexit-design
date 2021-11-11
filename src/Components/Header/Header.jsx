import Navigation from "../Navigation/Navigation";
import "./Header.scss";
import logo from "../../Assets/image/logo.png";

const Header = () => {
  return (
    <section className="layout__header header">
      <Navigation />
      <div className="header__logo">
        <img src={logo} alt="Logo" className="header__image" />
      </div>
    </section>
  );
};

export default Header;
