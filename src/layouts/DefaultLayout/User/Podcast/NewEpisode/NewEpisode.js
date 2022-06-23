import classNames from 'classnames/bind';
import styles from '../Podcast.module.scss';

const cx = classNames.bind(styles);
function NewEpisode() {
    return (
        <div className={cx('episode')}>
            <div className={cx('episode__icon')}></div>
            <div>
                <p className={cx('episode__desc')}>Không có tập mới</p>
            </div>
        </div>
    );
}

export default NewEpisode;
