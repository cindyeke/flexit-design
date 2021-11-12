import { useState } from "react";

import avatr1 from "../../Assets/image/avatar.jpg";

import "./Notifications.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";

const notificationBell = <FontAwesomeIcon icon={faBell} />;
const likeIcon = <FontAwesomeIcon icon={faHeart} />;
const commentIcon = <FontAwesomeIcon icon={faCommentAlt} />;

const Notifications = () => {
  const [notificationToggle, setNotificationToggle] = useState(false);

  const handleShowNotifications = () => {
    setNotificationToggle(!notificationToggle);
  };

  return (
    <div className="account__notifications notifications">
      <span className="notifications__icon" onClick={handleShowNotifications}>
        {notificationBell}
      </span>
      <span className="notifications__badge">3</span>

      <div
        className={`notifications__list ${notificationToggle ? "active" : ""}`}
      >
        <div className="notification__content">
          <div className="notification__avatar">
            <img src={avatr1} alt="" className="notification__avatarimg" />
          </div>
          <div className="notification__details">
            <p className="notification__details--first">Michael liked you!</p>
            <p>About 20 minutes ago</p>
          </div>
          <div className="notification__icon notification__icon--first">
            {likeIcon}
          </div>
        </div>

        <div className="notification__content">
          <div className="notification__avatar">
            <img src={avatr1} alt="" className="notification__avatarimg" />
          </div>
          <div className="notification__details">
            <p className="notification__details--first">Jack liked you!</p>
            <p>About 40 minutes ago</p>
          </div>
          <div className="notification__icon notification__icon--second">
            {likeIcon}
          </div>
        </div>

        <div className="notification__content">
          <div className="notification__avatar">
            <img src={avatr1} alt="" className="notification__avatarimg" />
          </div>
          <div className="notification__details">
            <p className="notification__details--first">
              Martin commented on your photo!
            </p>
            <p>About 56 minutes ago</p>
          </div>
          <div className="notification__icon notification__icon--third">
            {commentIcon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
