import { useRef } from 'react';
import { AiFillHeart, AiOutlineVideoCamera } from 'react-icons/ai';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';
import { CgMusic } from 'react-icons/cg';
import { GiMicrophone } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayerMusic } from '~/redux/reducer/songSlice';
import '../User.css';

function MyMusic() {
    const audioUser = useRef();

    const dispatch = useDispatch();

    const song = useSelector((state) => state.song.song);
    const songs = useSelector((state) => state.songs.songs);

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
                                            <span className="user-song-times hide-on-mobile">{item.duration}</span>
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
