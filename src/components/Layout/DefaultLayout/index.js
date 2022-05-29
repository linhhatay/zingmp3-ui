import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import User from './User';
import PlayerControls from './PlayerControls';
import { ListSong } from '~/Shared/ListSong';

const DefaultLayout = ({ children }) => {
    // const audioEl = useRef();

    // function setMainSong(path, songName, artist, imgSrc) {
    // setSong(path);
    // setSongName(songName);
    // setArtist(artist);
    // setImage(imgSrc);
    // }

    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{<User /> || { children }}</div>
                <PlayerControls />
            </div>
            <div className="background"></div>
        </div>
    );
};

export default DefaultLayout;
