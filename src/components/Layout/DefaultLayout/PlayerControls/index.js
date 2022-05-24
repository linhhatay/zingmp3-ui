import React, { useState, useRef, useEffect } from 'react';
import './PlayerControls.css';
import {
    AiFillHeart,
    AiOutlineHeart,
    AiOutlineStepForward,
    AiOutlineStepBackward,
    AiOutlinePauseCircle,
    AiOutlinePlayCircle,
    AiOutlineVideoCamera,
} from 'react-icons/ai';
import { BiDotsHorizontalRounded, BiWindows } from 'react-icons/bi';
import { FaRandom } from 'react-icons/fa';
import { IoRepeat, IoVolumeMediumOutline, IoVolumeMuteOutline } from 'react-icons/io5';
import { GiMicrophone } from 'react-icons/gi';
import { MdOutlineQueueMusic } from 'react-icons/md';
import { RiRepeatFill, RiRepeatOneFill } from 'react-icons/ri';

const PlayerControls = (props) => {
    const [isLove, setIsLove] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [durationSong, setDurationSong] = useState('00:00');
    const [currentTime, setCurrentTime] = useState('00:00');
    const [value, setValue] = useState(0);
    const [isLoop, setIsLoop] = useState(false);
    const [isRandom, setIsRandom] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const audioPlayer = useRef();
    const progressBar = useRef();

    const handleLoop = () => {
        setIsLoop(!isLoop);
    };

    const muteVolume = () => {
        setIsMuted(!isMuted);
    };

    useEffect(() => {
        console.log(audioPlayer);
        if (isMuted) {
            audioPlayer.current.muted = true;
        } else {
            audioPlayer.current.muted = false;
        }
    });

    const playRandomSong = () => {
        let newIndexSong;
        do {
            newIndexSong = Math.floor(Math.random() * props.songs.length);
        } while (newIndexSong === props.setCurrentSongIndex);
        props.setCurrentSongIndex(newIndexSong);
        console.log(newIndexSong);
        setIsRandom(!isRandom);
    };

    useEffect(() => {
        if (isLoop) {
            audioPlayer.current.loop = true;
        } else {
            audioPlayer.current.loop = false;
        }
    });

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDurationSong(seconds);
    });

    const nextSong = () => {
        if (props.currentSongIndex >= props.songs.length - 1) {
            props.setCurrentSongIndex(0);
        } else {
            props.setCurrentSongIndex((prev) => prev + 1);
        }

        props.setSong(props.songs[props.currentSongIndex].path);
        props.setImage(props.songs[props.currentSongIndex].imgSrc);
        props.setSongName(props.songs[props.currentSongIndex].songName);
        props.setArtist(props.songs[props.currentSongIndex].artist);
    };

    const prevSong = () => {
        if (props.currentSongIndex <= 0) {
            props.setCurrentSongIndex(props.songs.length - 1);
        } else {
            props.setCurrentSongIndex((prev) => prev - 1);
        }

        props.setSong(props.songs[props.currentSongIndex].path);
        props.setImage(props.songs[props.currentSongIndex].imgSrc);
        props.setSongName(props.songs[props.currentSongIndex].songName);
        props.setArtist(props.songs[props.currentSongIndex].artist);
    };

    const CalculateTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

        const seconds = Math.floor(sec % 60);
        const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${returnMinutes}:${returnSeconds}`;
    };

    const changeProgress = () => {
        if (audioPlayer.current.duration) {
            const progressPercent = (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100;
            setValue(progressPercent);
            setCurrentTime(Math.floor((progressPercent * audioPlayer.current.duration) / 100));
        }
    };

    const handleSeekTime = (e) => {
        console.log(e.target.value);
        const seekTime = (audioPlayer.current.duration / 100) * e.target.value;
        audioPlayer.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    const handleEndedSong = () => {
        nextSong();
    };

    const handleChangeLove = () => {
        setIsLove(!isLove);
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (isPlaying) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    });

    return (
        <div className="player">
            <div className="player-content">
                <div className="player-controls-left">
                    <div className="media">
                        <div className="media-left">
                            <img src={props.imgSrc} alt="media" />
                        </div>
                        <div className="media-content">
                            <h3>{props.name}</h3>
                            <p>{props.artist.join(', ')}</p>
                        </div>
                        <div className="media-right hide-on-mobile">
                            <i onClick={handleChangeLove}>{isLove ? <AiFillHeart /> : <AiOutlineHeart />}</i>
                            <i className="hide-on-tablet">
                                <BiDotsHorizontalRounded />
                            </i>
                        </div>
                    </div>
                </div>
                <div className="player-controls-center ">
                    <div className="actions">
                        <i className="hide-on-mobile" onClick={playRandomSong}>
                            {isRandom ? (
                                <FaRandom className="actions-icon actions-first active" />
                            ) : (
                                <FaRandom className="actions-icon actions-first " />
                            )}
                        </i>
                        <i className="hide-on-mobile" onClick={prevSong}>
                            <AiOutlineStepBackward className="actions-icon" />
                        </i>
                        <i onClick={handlePlayPause} className="actions-playpause">
                            {isPlaying ? (
                                <AiOutlinePauseCircle className="actions-icon play-pause" />
                            ) : (
                                <AiOutlinePlayCircle className="actions-icon play-pause" />
                            )}
                        </i>
                        <i onClick={nextSong}>
                            <AiOutlineStepForward className="actions-icon" />
                        </i>
                        <i className="hide-on-mobile" onClick={handleLoop}>
                            {isLoop ? (
                                <RiRepeatOneFill className="actions-icon active" />
                            ) : (
                                <RiRepeatFill className="actions-icon" />
                            )}
                        </i>
                    </div>
                    <div className="progress hide-on-mobile">
                        <span className="time-left">
                            {currentTime && !isNaN(currentTime) && CalculateTime(currentTime)
                                ? CalculateTime(currentTime)
                                : '00:00'}
                        </span>
                        <audio
                            ref={audioPlayer}
                            src={props.song}
                            onTimeUpdate={changeProgress}
                            onEnded={handleEndedSong}
                        />

                        <input
                            type="range"
                            value={value}
                            min="0"
                            step="1"
                            max="100"
                            ref={progressBar}
                            onChange={handleSeekTime}
                        />
                        <span className="time-right">
                            {durationSong && !isNaN(durationSong) && CalculateTime(durationSong)
                                ? CalculateTime(durationSong)
                                : '00:00'}
                        </span>
                    </div>
                </div>
                <div className="player-controls-right hide-on-mobile">
                    <div className="options">
                        <div className="options-item">
                            <AiOutlineVideoCamera className="options-icon" />
                        </div>
                        <div className="options-item">
                            <GiMicrophone className="options-icon" />
                        </div>
                        <div className="options-item">
                            <BiWindows className="options-icon" />
                        </div>
                        <div className="options-item" onClick={muteVolume}>
                            {isMuted ? (
                                <IoVolumeMuteOutline className="options-icon" />
                            ) : (
                                <IoVolumeMediumOutline className="options-icon" />
                            )}
                        </div>
                        <div className="options-volume">
                            <div className="volume-range"></div>
                        </div>
                        <div className="options-separate"></div>
                        <div className="options-item">
                            <MdOutlineQueueMusic className="options-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerControls;
