import React, { useState, useEffect, useRef } from "react";
import "../Styles/Container.css";
import { Header } from "./Header";
import { PlayerControls } from "./PlayerControls";
import { User } from "./User";
import { ListSong } from "../Shared/ListSong";

const Container = () => {
  return (
    <div className="container">
      <Header />
      <User />
    </div>
  );
};

export { Container };
