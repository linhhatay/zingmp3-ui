import classNames from 'classnames/bind';
import styles from './Media.module.scss';

const cx = classNames.bind(styles);

function Media({ children }) {
    return (
        <div>
            <div className={cx('media')}>
                <div className={cx('header')}>
                    <div className={cx('left')}>
                        <h3>BÀI HÁT</h3>
                    </div>
                    <div className={cx('center')}>
                        <h3>ALBUM</h3>
                    </div>
                    <div className={cx('right')}>
                        <h3>THỜI GIAN</h3>
                    </div>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}

export default Media;
