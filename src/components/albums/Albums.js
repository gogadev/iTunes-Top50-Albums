import React from "react";
import moment from "moment";
import LazyLoad from "react-lazyload";

import "./albums.style.css";

const Albums = ({ link, img, title, date }) => {
  const newDate = (date, format) => {
    return moment(date).format(format);
  };

  return (
    <ul className="album">
      <li className="item">
        <a href={link} target="blank">
          <span className="span"> {title.slice(0, 10)}...</span>
        </a>
      </li>
      <li className="item">
        <a href={link} target="blank">
          <LazyLoad height={200}>
            <img src={img} alt="" className="album-img" />
          </LazyLoad>
        </a>
      </li>
      <li className="date">Release Date: {newDate(date, "MMM Do YY")} </li>
    </ul>
  );
};

export default Albums;
