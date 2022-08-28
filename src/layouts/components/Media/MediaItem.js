import classNames from 'classnames/bind';
import { AiFillHeart } from 'react-icons/ai';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';
import { CgMusic } from 'react-icons/cg';
import { GiMicrophone } from 'react-icons/gi';
import styles from './Media.module.scss';

const cx = classNames.bind(styles);

function MediaItem({ data }) {
    const CalculateTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

        const seconds = Math.floor(sec % 60);
        const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${returnMinutes}:${returnSeconds}`;
    };

    return (
        <div className={cx('media-item')}>
            <div className={cx('item-left')}>
                <div className={cx('song-prefix')}>
                    <CgMusic className={cx('icon')} />
                </div>
                <div className={cx('song-thumb')}>
                    <img src={data.thumbnail} />
                    <div className={cx('active')}>
                        <BsFillPlayFill className={cx('icon')} />
                    </div>
                </div>
                <div className={cx('song-info')}>
                    <h3>{data.title}</h3>
                    <a href="#">{data.artists_names ?? data.artistsNames}</a>
                </div>
            </div>
            <div className={cx('content')}>
                <a href="#">{data.album ? data.album.title : ''}</a>
            </div>
            <div className={cx('item-right')}>
                <div className={cx('actions')}>
                    <i>
                        <GiMicrophone className={cx('icon')} />
                    </i>
                    <i>
                        <AiFillHeart className={cx('icon')} />
                    </i>
                    <i>
                        <BiDotsHorizontalRounded className={cx('icon')} />
                    </i>
                    <span className={cx('times')}>{CalculateTime(data.duration)}</span>
                </div>
            </div>
        </div>
    );
}

export default MediaItem;
