import "./Notifications.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const notificationBell = <FontAwesomeIcon icon={faBell} />;

const Notifications = () => {
  return (
    <div className="account__notifications notifications">
      <span className="notifications__icon">{notificationBell}</span>
      <span className="notifications__badge">3</span>
    </div>
  );
};

export default Notifications;
