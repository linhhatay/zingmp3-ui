import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import Button from '~/components/Button';
import styles from './Details.module.scss';
import { AiOutlineHeart, AiOutlinePlayCircle, AiOutlineRight } from 'react-icons/ai';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import Media, { MediaItem } from '~/layouts/components/Media';
import Carousel, { CarouselItem } from '~/layouts/components/Carousel';
import { BsFillPlayFill } from 'react-icons/bs';

const cx = classNames.bind(styles);

function Details() {
    const [recommendSong, setRecommendSong] = useState([]);
    const [carousel, setCarousel] = useState([]);
    useEffect(() => {
        async function getData() {
            const res = await axios.get(`http://14.225.192.25:3000/api/detailplaylist?id=ZZBUE7ZA`);
            return res;
        }
        getData().then((res) => setRecommendSong(res.data.data.song.items));
    }, []);
    useEffect(() => {
        async function getData() {
            const res = await axios.get(`http://14.225.192.25:3000/api/home?page=1`);
            return res;
        }
        getData().then((res) => setCarousel(res.data.data.items[3].items));
    }, []);

    const CalculateTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

        const seconds = Math.floor(sec % 60);
        const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${returnMinutes}:${returnSeconds}`;
    };

    const song = useSelector((state) => state.song.song);
    console.log(song);
    return (
        <div className={cx('details')}>
            <div className={cx('container')}>
                <div className={cx(['header'])}>
                    <div className={cx('header__left')}>
                        <div className={cx('banner')}>
                            <img src={song.album.thumbnail_medium} />
                            <div className={cx('hover')}>
                                <AiOutlinePlayCircle className={cx('large-icon')} />
                            </div>
                        </div>
                        <div className={cx('content')}>
                            <div>
                                <h3 className={cx('song-name')}>{song.album.name}</h3>
                                <div className={cx('description')}>
                                    <a>{song.artist.name}</a> • <span>25/08/2022</span>
                                </div>
                                <div className={cx('vote')}>{song.total} người yêu thích</div>
                            </div>
                            <div className={cx('actions')}>
                                <div>
                                    <Button className={cx('button')} rounded leftIcon={<BsFillPlayFill />}>
                                        PHÁT TẤT CẢ
                                    </Button>
                                </div>
                                <div className={cx('list-icon')}>
                                    <span className={cx('icon')}>
                                        <AiOutlineHeart />
                                    </span>
                                    <span className={cx('icon')}>
                                        <BiDotsHorizontalRounded />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('songs')}>
                        <Media>
                            <MediaItem data={song} />
                        </Media>
                        <div className={cx('title')}>Có Thể Bạn Quan Tâm</div>
                        <div>
                            {recommendSong.slice(0, 10).map((item, index) => (
                                <MediaItem key={index} data={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <Carousel title="Lựa chọn hôm nay" rightIcon={<AiOutlineRight />}>
                    {carousel.map((item, index) => (
                        <CarouselItem key={index} data={item} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Details;
