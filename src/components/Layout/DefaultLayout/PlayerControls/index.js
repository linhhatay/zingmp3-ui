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
import { IoRepeat, IoVolumeMediumOutline } from 'react-icons/io5';
import { GiMicrophone } from 'react-icons/gi';
import { MdOutlineQueueMusic } from 'react-icons/md';

const PlayerControls = (props) => {
    const [isLove, setIsLove] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleChangeLove = () => {
        setIsLove(!isLove);
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (isPlaying) {
            props.audioEl.current.play();
        } else {
            props.audioEl.current.pause();
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
                        <i className="hide-on-mobile">
                            <FaRandom className="actions-icon actions-first" />
                        </i>
                        <i className="hide-on-mobile" onClick={props.prevSong}>
                            <AiOutlineStepBackward className="actions-icon" />
                        </i>
                        <i onClick={handlePlayPause} className="actions-playpause">
                            {isPlaying ? (
                                <AiOutlinePauseCircle className="actions-icon play-pause" />
                            ) : (
                                <AiOutlinePlayCircle className="actions-icon play-pause" />
                            )}
                        </i>
                        <i onClick={props.nextSong}>
                            <AiOutlineStepForward className="actions-icon" />
                        </i>
                        <i className="hide-on-mobile">
                            <IoRepeat className="actions-icon" />
                        </i>
                    </div>
                    <div className="progress hide-on-mobile">
                        <span className="time-left">00:00</span>
                        <input type="range" min="0" max="100" step="1" />
                        <audio ref={props.audioEl} src={props.song} />
                        {/* <span className="time-right">{`0${Math.round(props.audioEl.current.duration * 100 / 60) / 100}`}</span> */}
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
                        <div className="options-item">
                            <IoVolumeMediumOutline className="options-icon" />
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
