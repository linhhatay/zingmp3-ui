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
import { IoVolumeMediumOutline, IoVolumeMuteOutline } from 'react-icons/io5';
import { GiMicrophone } from 'react-icons/gi';
import { MdOutlineQueueMusic } from 'react-icons/md';
import { RiRepeatFill, RiRepeatOneFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { nextSong, prevSong } from '~/redux/reducer/songSlice';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { showToast } from '~/redux/reducer/toastSlice';
import { getListSong } from '~/redux/reducer/songsSlice';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';

const PlayerControls = () => {
    const song = useSelector((state) => state.song.song);
    const songs = useSelector((state) => state.songs.songs);

    const toast = useSelector((state) => state.toast);

    const dispatch = useDispatch();

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

    const playRandomSong = () => {
        setIsRandom(!isRandom);
    };

    let newIndexSong;
    const handleRandomSong = (id) => {
        if (isRandom === true) {
            do {
                newIndexSong = Math.floor(Math.random() * songs.length);
            } while (newIndexSong === song.id);
            dispatch(nextSong(newIndexSong) || prevSong(newIndexSong));
        } else {
            dispatch(nextSong(id) || prevSong(id));
        }
    };

    const scrollIntoView = () => {
        audioPlayer.current.scrollIntoViewIfNeeded({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        });
    };

    const handleNextSong = () => {
        if (song.position >= songs.length) {
            handleRandomSong(1);
            // dispatch(nextSong(1));
        } else {
            handleRandomSong(song.position + 1);
            // dispatch(nextSong(song.position + 1));
            scrollIntoView();
        }
    };

    const handlePrevSong = () => {
        if (song.position <= 1) {
            // dispatch(prevSong(songs.length));
            handleRandomSong(songs.length);
        } else {
            // dispatch(prevSong(song.position - 1));
            handleRandomSong(song.position - 1);
        }
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
        const seekTime = (audioPlayer.current.duration / 100) * e.target.value;
        audioPlayer.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    const handleEndedSong = () => {
        handleNextSong();
    };

    const handleChangeLove = () => {
        setIsLove(!isLove);
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
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

    useEffect(() => {
        if (isMuted) {
            audioPlayer.current.muted = true;
        } else {
            audioPlayer.current.muted = false;
        }
    });

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
                            <Button to="/bai-hat">
                                <img src={song.thumbnail} alt="media" />
                            </Button>
                        </div>
                        <div className="media-content">
                            <h3>{song.name}</h3>
                            <p>{song.artists_names}</p>
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
                        <i className="hide-on-mobile" onClick={handlePrevSong}>
                            <AiOutlineStepBackward className="actions-icon" />
                        </i>
                        <i onClick={handlePlayPause} className="actions-playpause">
                            {isPlaying ? (
                                <AiOutlinePauseCircle className="actions-icon play-pause" />
                            ) : (
                                <AiOutlinePlayCircle className="actions-icon play-pause" />
                            )}
                        </i>
                        <i onClick={handleNextSong}>
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
                            src={song.link}
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
                        <Tippy delay={[0, 50]} content="MV" placement="top">
                            <div className="options-item" onClick={() => dispatch(showToast())}>
                                <AiOutlineVideoCamera className="options-icon" />
                            </div>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Xem lời bài hát" placement="top">
                            <div className="options-item">
                                <GiMicrophone className="options-icon" />
                            </div>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Chế độ cửa sổ" placement="top">
                            <div className="options-item" onClick={() => dispatch(showToast())}>
                                <BiWindows className="options-icon" />
                            </div>
                        </Tippy>
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
                        <Tippy delay={[0, 50]} content="Danh sách phát" placement="top">
                            <div className="options-item" onClick={() => dispatch(showToast())}>
                                <MdOutlineQueueMusic className="options-icon" />
                            </div>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerControls;
