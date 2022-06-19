import { Outlet } from 'react-router-dom';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import styles from './Song.module.scss';

const cx = classNames.bind(styles);

function Song({ children }) {
    useEffect(() => {
        const btnLinks = document.querySelectorAll('.user__content-link');

        function handleActive() {
            btnLinks.forEach((item) => {
                item.classList.remove('active');
                this.classList.add('active');
            });
        }

        btnLinks.forEach((item) => {
            item.addEventListener('click', handleActive);
        });
    }, []);

    return (
        <div>
            <div className="user__content-btn">
                <Button rounded className={cx(['button'], 'user__content-link active')} to="/mymusic/song/favorite">
                    YÊU THÍCH
                </Button>
                <Button rounded className={cx(['button'], 'user__content-link')} to="/mymusic/song/upload">
                    ĐÃ TẢI LÊN
                </Button>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Song;
