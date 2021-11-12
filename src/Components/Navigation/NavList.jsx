import "./Navigation.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faPeopleCarry } from "@fortawesome/free-solid-svg-icons";

const homeIcon = <FontAwesomeIcon icon={faHome} />;
const messageIcon = <FontAwesomeIcon icon={faEnvelope} />;
const rankIcon = <FontAwesomeIcon icon={faChartBar} />;
const challengeIcon = <FontAwesomeIcon icon={faTrophy} />;
const partyIcon = <FontAwesomeIcon icon={faGift} />;
const connectIcon = <FontAwesomeIcon icon={faLink} />;
const paradeIcon = <FontAwesomeIcon icon={faPeopleCarry} />;
const groupIcon = <FontAwesomeIcon icon={faUsers} />;

const NavList = ({ navToggleStatus }) => {
  return (
    <div className={`nav__lists ${navToggleStatus ? "active" : ""}`}>
      <li className="nav__list nav__list--active">
        <span className="nav__listicon nav__listicon--active">{homeIcon}</span>{" "}
        Home
      </li>
      <li className="nav__list">
        <span className="nav__listicon">{messageIcon}</span> Message
      </li>
      <li className="nav__list nav__list--share">SHARE</li>
      <li className="nav__list">
        <span className="nav__listicon">{rankIcon}</span> Ranking
      </li>
      <li className="nav__list">
        <span className="nav__listicon">{challengeIcon}</span> Challenge
      </li>
      <li className="nav__list">
        <span className="nav__listicon">{partyIcon}</span> Party
      </li>
      <li className="nav__list">
        <span className="nav__listicon">{connectIcon}</span> Connect
      </li>
      <li className="nav__list">
        <span className="nav__listicon">{paradeIcon}</span> Parade
      </li>
      <li className="nav__list">
        <span className="nav__listicon">{groupIcon}</span> Group
      </li>
    </div>
  );
};

export default NavList;
