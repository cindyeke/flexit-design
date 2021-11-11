import "./Account.scss";
import Notifications from "../Notifications/Notifications";
import avatar from "../../Assets/image/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const signalDown = <FontAwesomeIcon icon={faChevronDown} />;

const Account = () => {
  return (
    <div className="layout__account account">
      <Notifications />
      <div className="account__user">
        <div className="account__user--avatar">
          <img src={avatar} alt="" className="account__img" />
          <span className="account__status"></span>
        </div>

        {/* <span className="account__user--name">
          Abigail
          <span className="account__dropdown">{signalDown}</span>
        </span> */}
      </div>
    </div>
  );
};

export default Account;
