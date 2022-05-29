import React, { useEffect, useRef, useState } from 'react';
import './User.css';
import { AiOutlinePlayCircle, AiFillHeart, AiOutlineHeart, AiOutlineVideoCamera } from 'react-icons/ai';
import { CgMusic } from 'react-icons/cg';
import { GiMicrophone } from 'react-icons/gi';
import { BsFillPlayFill } from 'react-icons/bs';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayerMusic } from '../../../../redux/songSlice';

const User = (props) => {
    const audioUser = useRef();

    const dispatch = useDispatch();

    const song = useSelector((state) => state.song.song);
    const songs = useSelector((state) => state.songs.songs);

    useEffect(() => {
        const navItems = document.querySelectorAll('.user__nav-item');
        function handleChangeActive() {
            navItems.forEach((item) => {
                item.classList.remove('active');
                this.classList.add('active');
            });
        }

        navItems.forEach((item) => {
            item.addEventListener('click', handleChangeActive);
        });
    }, []);

    useEffect(() => {
        const btnLinks = document.querySelectorAll('.user__content-link');

        function handleActive() {
            btnLinks.forEach((item) => {
                item.classList.remove('active');
                this.classList.add('active');
            });
        }

        btnLinks.forEach((item) => {
            item.addEventListener('click', handleActive);
        });
    }, []);

    useEffect(() => {
        const songItems = document.querySelectorAll('.user__songs-item');
        songItems[0].classList.add('active');
        function handleActiveSong() {
            songItems.forEach((item) => {
                item.classList.remove('active');
                this.classList.add('active');
            });
        }
        songItems.forEach((item) => {
            item.addEventListener('click', handleActiveSong);
        });
    }, []);

    const sendData = (idSong) => {
        dispatch(getPlayerMusic(idSong));
    };

    return (
        <div className="user">
            <div className="user-container">
                <div className="user-content">
                    <div className="user-header">
                        <h1 className="user-title">Thư viện</h1>
                        <button className="user-header-btn">
                            <AiOutlinePlayCircle className="user-header-icon" />
                        </button>
                    </div>
                    <div className="user-bottom">
                        <div className="user__nav">
                            <div className="user__nav-content">
                                <ul className="user__nav-list">
                                    <li className="user__nav-item active">BÀI HÁT</li>
                                    <li className="user__nav-item">PODCAST</li>
                                    <li className="user__nav-item">ALBUM</li>
                                    <li className="user__nav-item hide-on-mobile">MV</li>
                                </ul>
                            </div>
                        </div>
                        <div className="user__content">
                            <div className="user__content-btn">
                                <a className="user__content-link active">YÊU THÍCH</a>
                                <a className="user__content-link">ĐÃ TẢI LÊN</a>
                            </div>
                        </div>
                        <div className="user__songs">
                            <div className="user__songs-wrapper">
                                <div className="user__songs-header">
                                    <div className="songs-left">
                                        <h3>BÀI HÁT</h3>
                                    </div>
                                    <div className="songs-center hide-on-mobile">
                                        <h3>ALBUM</h3>
                                    </div>
                                    <div className="songs-right hide-on-mobile">
                                        <h3>THỜI GIAN</h3>
                                    </div>
                                </div>
                                <div className="user__songs-list">
                                    <div className="user__songs-select">
                                        {songs &&
                                            songs.map((item) => (
                                                <div
                                                    className={`user__songs-item ${item.id === song.id && 'active'}`}
                                                    key={item.id}
                                                    onClick={() => sendData(item.id)}
                                                >
                                                    <div className="user__songs-item-left">
                                                        <div className="song-prefix">
                                                            <CgMusic className="song-prefix-icon" />
                                                        </div>
                                                        <div className="song-thumb">
                                                            <img src={item.imgSrc} />
                                                            <div className="song-thumb-active">
                                                                <BsFillPlayFill className="song-thumb-icons" />
                                                            </div>
                                                        </div>
                                                        <div className="song-info">
                                                            <h3>{item.songName}</h3>
                                                            <a href="#">{item.artist.join(', ')}</a>
                                                        </div>
                                                    </div>
                                                    <audio ref={audioUser} src={item.path} />
                                                    <div className="user__songs-item-center hide-on-mobile">
                                                        <a href="#">{item.album}</a>
                                                    </div>
                                                    <div className="user__songs-item-right">
                                                        <div className="user-song-actions hide-on-mobile">
                                                            <i>
                                                                <AiOutlineVideoCamera className="user-song-icon" />
                                                            </i>
                                                            <i>
                                                                <GiMicrophone className="user-song-icon" />
                                                            </i>
                                                            <i>
                                                                <AiFillHeart className="user-song-icon heart hide-on-mobile" />
                                                            </i>
                                                            <i>
                                                                <BiDotsHorizontalRounded className="user-song-icon " />
                                                            </i>
                                                            <span className="user-song-times hide-on-mobile">
                                                                {item.duration}
                                                            </span>
                                                        </div>
                                                        <i className="show-on-mobile">
                                                            <BiDotsHorizontalRounded className="user-song-icon " />
                                                        </i>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
