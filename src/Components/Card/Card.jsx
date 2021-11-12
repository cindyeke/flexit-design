import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";

import "../CardList/CardList.scss";

const locationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />;
const likeIcon = <FontAwesomeIcon icon={faHeart} />;
const dislikeIcon = <FontAwesomeIcon icon={faThumbsDown} />;

const Card = ({ image }) => {
  let imageUrl = image.urls.regular;
  let userFirstName = image.user.first_name;
  let userLocation = image.user.location;

  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  const handleHover = () => {
    toggleDisplay();
  };

  return (
    <div
      className={`card ${display ? "active" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img src={imageUrl} alt="" className="card__img" />
      <div className="card__indicators">
        <li className="card__indicator card__indicator--first"></li>
        <li className="card__indicator"></li>
        <li className="card__indicator"></li>
        <li className="card__indicator"></li>
      </div>
      <div className={`card__details ${display ? "active" : ""}`}>
        <p className={`card__name ${display ? "active" : ""}`}>{`${
          userFirstName && userFirstName
        }, 26`}</p>
        <p className={`card__location ${display ? "active" : ""}`}>
          <span className="card__locationicon">{locationIcon}</span>
          {`${userLocation ? userLocation : ""}`}
        </p>
        <div className={`card__btns ${display ? "active" : ""}`}>
          <button className="card__btn card__btn--first">{likeIcon}</button>
          <button className="card__btn">{dislikeIcon}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
