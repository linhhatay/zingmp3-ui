import classNames from 'classnames/bind';
import styles from './MV.module.scss';

const cx = classNames.bind(styles);

function MV() {
    return (
        <div className={cx('mv')}>
            <div className={cx('mv__icon')}></div>
            <div>
                <p className={cx('mv__desc')}>Chưa có MV nào trong thư viện cá nhân</p>
            </div>
            <div>
                <button className={cx(['mv__btn'], 'upload-btn')}>
                    KHÁM PHÁ NGAY
                    <input type="file" name="myfile" title="" />
                </button>
            </div>
        </div>
    );
}

export default MV;
