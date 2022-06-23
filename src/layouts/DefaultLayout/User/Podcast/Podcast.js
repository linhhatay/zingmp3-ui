import { Outlet } from 'react-router-dom';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Podcast.module.scss';

const cx = classNames.bind(styles);

function Podcast() {
    return (
        <>
            <div className="user__content-btn">
                <Button
                    rounded
                    className={cx(['button'], 'user__content-link active')}
                    to="/mymusic/podcast/new-episode"
                >
                    TẬP MỚI
                </Button>
                <Button rounded className={cx(['button'], 'user__content-link')} to="/mymusic/podcast/saved-episode">
                    TẬP ĐÃ LƯU
                </Button>
                <Button rounded className={cx(['button'], 'user__content-link')} to="/mymusic/podcast/followed-program">
                    CHƯƠNG TRÌNH
                </Button>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default Podcast;
