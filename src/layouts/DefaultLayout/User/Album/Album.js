import classNames from 'classnames/bind';
import styles from './Album.module.scss';

const cx = classNames.bind(styles);

function Album() {
    return (
        <>
            <div className={cx('album')}>
                <div className={cx('album__icon')}></div>
                <div>
                    <p className={cx('album__desc')}>Chưa có bài hát tải lên trong thư viện cá nhân</p>
                </div>
            </div>
        </>
    );
}

export default Album;
