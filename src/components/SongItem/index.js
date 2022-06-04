import classNames from 'classnames/bind';
import styles from './SongItem.module.scss';
import { BsFillPlayFill } from 'react-icons/bs';

const cx = classNames.bind(styles);

const SongItem = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('prefix')}>
                <img className={cx('avatar')} src={data.thumbnail} />
                <div className={cx('avatar-hover')}>
                    <BsFillPlayFill />
                </div>
            </div>
            <div className={cx('info')}>
                <p className={cx('name')}>{data.title}</p>
                <span className={cx('artist')}>{data.artistsNames}</span>
            </div>
        </div>
    );
};

export default SongItem;
