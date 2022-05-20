import React from "react";
import LibraryList from "./LibraryList";

const LibrarySidebar = ({ title, icon }) => {
  return (
    <div className="library">
      <div className="library__header hide-on-tablet">
        <h3 className="hide-on-tablet">{title}</h3>
        <i >{icon}</i>
      </div>
      <ul className="library__menu">
        {LibraryList &&
          LibraryList.map((item, index) => (
            <li className="library__item" key={index}>
              <i >{item.icon}</i>
              <p className="hide-on-tablet">{item.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export { LibrarySidebar };
