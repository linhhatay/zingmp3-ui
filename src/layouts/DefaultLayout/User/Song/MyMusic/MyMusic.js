import { useRef } from 'react';
import { AiFillHeart, AiOutlineVideoCamera } from 'react-icons/ai';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';
import { CgMusic } from 'react-icons/cg';
import { GiMicrophone } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayerMusic } from '~/redux/reducer/songSlice';
import '../../User.css';

function MyMusic() {
    const audioUser = useRef();

    const dispatch = useDispatch();

    const song = useSelector((state) => state.song.song);
    const songs = useSelector((state) => state.songs.songs);

    const CalculateTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

        const seconds = Math.floor(sec % 60);
        const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${returnMinutes}:${returnSeconds}`;
    };

    const sendData = (idSong) => {
        dispatch(getPlayerMusic(idSong));
    };
    return (
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
                                    className={`user__songs-item ${item.position === song.position && 'active'}`}
                                    key={item.position}
                                    onClick={() => sendData(item.position)}
                                >
                                    <div className="user__songs-item-left">
                                        <div className="song-prefix">
                                            <CgMusic className="song-prefix-icon" />
                                        </div>
                                        <div className="song-thumb">
                                            <img src={item.thumbnail} />
                                            <div className="song-thumb-active">
                                                <BsFillPlayFill className="song-thumb-icons" />
                                            </div>
                                        </div>
                                        <div className="song-info">
                                            <h3>{item.title}</h3>
                                            <a href="#">{item.artists_names}</a>
                                        </div>
                                    </div>
                                    <audio ref={audioUser} src={item.link} />
                                    <div className="user__songs-item-center hide-on-mobile">
                                        <a href="#">{item.album ? item.album.name : ''}</a>
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
                                                {CalculateTime(item.duration)}
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
    );
}

export default MyMusic;
