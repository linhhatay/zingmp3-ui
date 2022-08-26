import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Carousel.module.scss';

const cx = classNames.bind(styles);

function Carousel({ title, rightIcon, children }) {
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <h3 className={cx('title')}>{title}</h3>
                <Button className={cx('button')} text rightIcon={rightIcon}></Button>
            </div>
            <div className={cx(['wrapper'])}>{children}</div>
        </div>
    );
}

export default Carousel;
