import classNames from 'classnames/bind';
import { AiOutlineHeart, AiOutlinePlayCircle } from 'react-icons/ai';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import styles from './Carousel.module.scss';

const cx = classNames.bind(styles);

function CarouselItem({ className, square = false, circle = false, small = false, large = false, data = [] }) {
    const classes = cx('carousel-item', {
        [className]: className,
        square,
        circle,
        small,
        large,
    });

    return (
        <div className={`${classes}`}>
            <div className={cx('card')}>
                <a className={cx('link')}>
                    <img className={cx('image')} src={data.thumbnailM} />
                </a>
                <div className={cx('actions')}>
                    <span className={cx('icon')}>
                        <AiOutlineHeart />
                    </span>
                    <span className={cx(['icon', 'large-icon'])}>
                        <AiOutlinePlayCircle />
                    </span>
                    <span className={cx('icon')}>
                        <BiDotsHorizontalRounded />
                    </span>
                </div>
            </div>
            <div className={cx('content')}>
                <h4 className={cx('desc')}>{data.title}</h4>
                <h3 className={cx('subtitle')}>{data.sortDescription}</h3>
            </div>
        </div>
    );
}

export default CarouselItem;
