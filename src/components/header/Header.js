import React from "react";

import img from "../../assets/img.png";

import "./header.style.css";

const Header = () => {
  return (
    <header>
      <h1 className="title">
        <span>i</span>Tunes Top 50 Albums
      </h1>
      <div className="image">
        <img className="img" src={img} alt="" />
      </div>
    </header>
  );
};

export default Header;
