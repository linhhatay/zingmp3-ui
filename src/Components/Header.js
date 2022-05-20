import React, { useEffect } from "react";
import "../Styles/Header.css";
import HeaderOptions from "../Shared/HeaderOptions";
import { BsArrowLeft, BsArrowRight, BsSearch } from "react-icons/bs";

const Header = () => {

  return (
    <div className="header">
      <div className="header-left">
        <div className="header__options hide-on-mobile">
          <button className="btn">
            <BsArrowLeft className="btn-icon" />
          </button>
          <button className="btn">
            <BsArrowRight className="btn-icon" />
          </button>
        </div>
        <form className="search">
          <div className="search-container">
            <button className="search-btn">
              <BsSearch className="search-btn-icon" />
            </button>
            <div className="search-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV ..."
              />
            </div>
          </div>
        </form>
      </div>
      <div className="header-right">
        {HeaderOptions &&
          HeaderOptions.map((item, index) => (
            <div key={index} className="header-right-option">
              <div className="header-right-icon">{item.icon}</div>
            </div>
          ))}
        
      </div>
    </div>
  );
};

export { Header };
