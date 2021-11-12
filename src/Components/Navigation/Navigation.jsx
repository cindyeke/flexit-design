import { useState, useEffect } from "react";
import "./Navigation.scss";
import NavList from "./NavList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const navBars = <FontAwesomeIcon icon={faBars} />;
const navExit = <FontAwesomeIcon icon={faTimes} />;

const Navigation = () => {
  const [navToggleStatus, setNavToggleStatus] = useState(false);

  const focusNav = () => {
    const body = document.getElementsByTagName("BODY")[0];
    navToggleStatus
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "visible");
  };

  const handleToggleNav = () => {
    setNavToggleStatus(!navToggleStatus);
  };

  useEffect(() => {
    focusNav();
  }, [navToggleStatus]);

  return (
    <nav className="nav">
      {screen.width < 1000 ? (
        <span className="nav__icon" onClick={handleToggleNav}>
          {navToggleStatus ? navExit : navBars}
        </span>
      ) : (
        <NavList navToggleStatus={true} />
      )}

      <NavList navToggleStatus={navToggleStatus} />
    </nav>
  );
};

export default Navigation;
