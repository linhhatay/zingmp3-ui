import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import User from './User';
import PlayerControls from './PlayerControls';
import { ListSong } from '~/Shared/ListSong';

const DefaultLayout = ({ children }) => {
    const audioEl = useRef();

    const [song, setSong] = useState(ListSong[0].path);
    const [songs, setSongs] = useState(ListSong);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
    const [image, setImage] = useState(ListSong[0].imgSrc);
    const [songName, setSongName] = useState(ListSong[0].songName);
    const [artist, setArtist] = useState(ListSong[0].artist);

    function setMainSong(path, songName, artist, imgSrc) {
        setSong(path);
        setSongName(songName);
        setArtist(artist);
        setImage(imgSrc);
    }

    const nextSong = () => {
        setCurrentSongIndex((prev) => prev + 1);

        if (currentSongIndex >= songs.length - 1) {
            setCurrentSongIndex(0);
        }

        setSong(songs[currentSongIndex].path);
        setImage(songs[currentSongIndex].imgSrc);
        setSongName(songs[currentSongIndex].songName);
        setArtist(songs[currentSongIndex].artist);
    };

    const prevSong = () => {
        setCurrentSongIndex((prev) => prev - 1);

        if (currentSongIndex <= 0) {
            setCurrentSongIndex(songs.length - 1);
        }

        setSong(songs[currentSongIndex].path);
        setImage(songs[currentSongIndex].imgSrc);
        setSongName(songs[currentSongIndex].songName);
        setArtist(songs[currentSongIndex].artist);
    };

    // useEffect(() => {
    //     setNextSongIndex(() => {
    //         if (currentSongIndex + 1 >= songs.length - 1) {
    //             return 0;
    //         } else {
    //             return currentSongIndex + 1;
    //         }
    //     });
    // }, [currentSongIndex]);

    // const SkipSong = (foward = true) => {
    //     if (foward) {
    //         setCurrentSongIndex(() => {
    //             let temp = currentSongIndex;
    //             temp++;

    //             if (temp > songs.length - 1) {
    //                 temp = 0;
    //             }

    //             return temp;
    //         });

    //     } else {
    //         setCurrentSongIndex(() => {
    //             let temp = currentSongIndex;
    //             temp--;

    //             if (temp < 0) {
    //                 temp = songs.length - 1;
    //             }
    //             return temp;
    //         });
    //         setSong(songs[currentSongIndex].path);
    //         setImage(songs[currentSongIndex].imgSrc);
    //         setSongName(songs[currentSongIndex].songName);
    //         setArtist(songs[currentSongIndex].artist);
    //     }
    // };

    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    {(
                        <User
                            setMainSong={setMainSong}
                            ListSong={ListSong}
                            audioEl={audioEl}
                            songs={songs}
                            currentSongIndex={currentSongIndex}
                            setCurrentSongIndex={setCurrentSongIndex}
                            song={song}
                            imgSrc={image}
                            name={songName}
                            artist={artist}
                            setSongName={setSongName}
                            setSong={setSong}
                            setImage={setImage}
                            setArtist={setArtist}
                        />
                    ) || { children }}
                </div>
                <PlayerControls
                    ListSong={ListSong}
                    nextSong={nextSong}
                    prevSong={prevSong}
                    audioEl={audioEl}
                    songs={songs}
                    currentSongIndex={currentSongIndex}
                    setCurrentSongIndex={setCurrentSongIndex}
                    song={song}
                    imgSrc={image}
                    name={songName}
                    artist={artist}
                />
            </div>
            <div className="background"></div>
        </div>
    );
};

export default DefaultLayout;
