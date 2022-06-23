import classNames from 'classnames/bind';
import styles from './Upload.module.scss';

const cx = classNames.bind(styles);

function Upload() {
    return (
        <div className={cx('upload')}>
            <div className={cx('upload__icon')}></div>
            <div>
                <p className={cx('upload__desc')}>Chưa có bài hát tải lên trong thư viện cá nhân</p>
            </div>
            <div>
                <button className={cx(['upload__btn'], 'upload-btn')}>
                    TẢI LÊN NGAY
                    <input type="file" name="myfile" title="" />
                </button>
            </div>
        </div>
    );
}

export default Upload;
