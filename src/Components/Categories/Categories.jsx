import "./Categories.scss";
import ScrollContainer from "react-indiana-drag-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const signalDown = <FontAwesomeIcon icon={faChevronDown} />;

const Categories = () => {
  return (
    <div className="layout__categories categories">
      <ScrollContainer className="categories__list">
        <div className="category category--first">
          World <span className="category__downicon">{signalDown}</span>
        </div>
        <div className="category">
          Following <span className="category__downicon">{signalDown}</span>
        </div>
        <div className="category">
          Popular <span className="category__downicon">{signalDown}</span>
        </div>
        <div className="category">
          Post <span className="category__downicon">{signalDown}</span>
        </div>
        <div className="category">
          Gender <span className="category__downicon">{signalDown}</span>
        </div>
        <div className="category">
          Location <span className="category__downicon">{signalDown}</span>
        </div>
        <div className="category category--last">
          Profession <span className="category__downicon">{signalDown}</span>
        </div>
      </ScrollContainer>
    </div>
  );
};

export default Categories;
