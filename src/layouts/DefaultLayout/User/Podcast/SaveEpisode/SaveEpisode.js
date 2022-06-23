import classNames from 'classnames/bind';
import styles from '../Podcast.module.scss';

const cx = classNames.bind(styles);

function SaveEpisode() {
    return (
        <div className={cx('save-episode')}>
            <div className={cx('save-episode__icon')}></div>
            <div>
                <p className={cx('save-episode__desc')}>Không có tập đã lưu</p>
            </div>
        </div>
    );
}

export default SaveEpisode;
