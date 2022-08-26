import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import classNames from 'classnames/bind';
import styles from './Arrow.module.scss';

const cx = classNames.bind(styles);

export function NextArrow() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon')}>
                <IoIosArrowForward />
            </div>
        </div>
    );
}

export function PrevArrow() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon')}>
                <IoIosArrowBack />
            </div>
        </div>
    );
}
