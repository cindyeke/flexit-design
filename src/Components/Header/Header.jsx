import Navigation from "../Navigation/Navigation";
import "./Header.scss";
import logo from "../../Assets/image/logo.png";

const Header = () => {
  return (
    <section className="layout__header header">
      <div className="header__logo">
        <img src={logo} alt="Logo" className="header__image" />
      </div>
      <Navigation />
    </section>
  );
};

export default Header;
