import "./Navigation.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const navBars = <FontAwesomeIcon icon={faBars} />;

const Navigation = () => {
  return <nav className="nav">{navBars}</nav>;
};

export default Navigation;
