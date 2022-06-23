import classNames from 'classnames/bind';
import styles from '../Podcast.module.scss';

const cx = classNames.bind(styles);

function FollowedProgram() {
    return (
        <div className={cx('program')}>
            <div className={cx('program__icon')}></div>
            <div>
                <p className={cx('program__desc')}>Không có podcast trong thư viện cá nhân</p>
            </div>
            <div>
                <button className={cx(['program__btn'], 'upload-btn')}>
                    KHÁM PHÁ NGAY
                    <input type="file" name="myfile" title="" />
                </button>
            </div>
        </div>
    );
}

export default FollowedProgram;
