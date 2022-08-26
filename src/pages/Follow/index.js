import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Follow.scss';
import { Autoplay, Navigation, Pagination } from 'swiper';
import NewFeed from '~/pages/Follow/NewFeed/NewFeed';
import { Grid } from '@mui/material';

const newFeeds = [
    {
        id: 1,
        avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/8/c/7/9/8c79b11c5e1e09a95e982e799583ce97.jpg',
        name: 'Big Daddy',
        caption: 'Làm 1 tý Hạ Long với gia đình 😍',
        image: 'https://photo-zmedia-zmp3.zmdcdn.me/w512_png/87d372f055b5bcebe5a4',
        like: 20,
        comment: 8,
        date: '23 tháng 5 lúc 11:33',
    },
    {
        id: 2,
        avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/a/4/1/b/a41b468005ea5347213a5ada872096ba.jpg',
        name: 'Hồng Thanh',
        caption: 'Nắng...',
        image: 'https://photo-zmedia-zmp3.zmdcdn.me/w512_png/dc84e4a6c3e32abd73f2',
        like: 2,
        comment: 0,
        date: '23 tháng 5 lúc 11:26',
    },
    {
        id: 3,
        avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/9/0/90c4405d1d065c6f53ecf11cd54c573a_1509438715.jpg',
        name: 'Hoàng Thùy Linh',
        caption: 'Chúc mừng một mùa SEA Games đã diễn ra thành công và rực rỡ tại Việt Nam chúng ta',
        image: 'https://photo-zmedia-zmp3.zmdcdn.me/w512_png/f16c8941ae04475a1e15',
        like: 125,
        comment: 58,
        date: '23 tháng 5 lúc 12:30',
    },
    {
        id: 4,
        avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/d/d/6/a/dd6a24200a6554459bdf543b2cc59c0e.jpg',
        name: 'Ninh Dương Lan Ngọc',
        caption:
            'Lần đầu chúc mừng sinh nhật Thỏ Ngọc hồn nhiên hơi ngơ ngơ mà thấy thương nhiều , hổng biết từ đâu va vào nhau, nhìn thấy hành trình thay đổi và cố gắng của bả mà trân trọng lắm',
        image: 'https://photo-zmedia-zmp3.zmdcdn.me/w512_png/df01a52382666b383277',
        like: 25,
        comment: 18,
        date: '23 tháng 5 lúc 12:30',
    },
    {
        id: 5,
        avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/d/d/6/a/dd6a24200a6554459bdf543b2cc59c0e.jpg',
        name: 'Hương Ly',
        caption: 'Đi ăn lẩu Thái thôi cả nhà ơiiii',
        image: 'https://photo-zmedia-zmp3.zmdcdn.me/w512_png/9bb239911ed4f78aaec5',
        like: 225,
        comment: 118,
        date: '23 tháng 5 lúc 18:30',
    },
    {
        id: 6,
        avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/0/a/9/10a9a536eb062f6adc1f717740cd4155.jpg',
        name: 'Khải Đăng',
        caption:
            'Bác Park ơi!!! Cháu của bác nè 🥰Từ khi có bác mng được đi bão đều đều vui như trẩy hội 🥰Chúc mừng tất cả những chiến thắng của các vận động viên, tuyển bóng đá nam và bóng đá nữ cùng với tất cả những huy chương mà chúng ta có được tại Sea game 2022 ❤️❤️❤️',
        image: 'https://photo-zmedia-zmp3.zmdcdn.me/w512_png/b58831aa16efffb1a6fe',
        like: 55,
        comment: 14,
        date: '23 tháng 5 lúc 15:05',
    },
];

const newFeeds2 = [
    {
        id: 7,
        avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/7/2/c/b/72cba57422697e21b2cf500476a76554.jpg',
        name: 'Nhật Tinh Anh',
        caption:
            'Nhật Tinh Anh sẽ lên sóng Single mới “NGƯỜI MÌNH THƯƠNG -CHẲNG THƯƠNG MÌNH “ vào ngày 24.08 lúc 19:00 giờ Việt Nam do Phan Hiếu sáng tác Bài hát sẽ được Độc quyền trên Zingmp3',
        image: 'https://photo-zmedia-zmp3.zmdcdn.me/w512_png/e0d881f5a6b04fee16a1',
        like: 120,
        comment: 18,
        date: '23 tháng 5 lúc 11:33',
    },
    {
        id: 8,
        avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/9/0/905c8564e1bf9402158b094227358505_1343896961.jpg',
        name: 'Ông Cao Thắng',
        caption: 'Không nói nhiều, Việt Nam vô địch !!!',
        image: 'https://photo-zmedia-zmp3.zmdcdn.me/w512_png/6d22140f334ada14835b',
        like: 2,
        comment: 0,
        date: '23 tháng 5 lúc 11:26',
    },
    {
        id: 9,
        avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/e/f/3/9/ef3982b7065156106d330a1a6ba86f78.jpg',
        name: 'Trường Thế Vinh',
        caption: 'Happy birthday to me <3',
        image: 'https://photo-zmedia-zmp3.zmdcdn.me/w512_png/2647546b732e9a70c33f',
        like: 1225,
        comment: 258,
        date: '23 tháng 5 lúc 12:30',
    },
    {
        id: 10,
        avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/2/9/8/b/298bf5880cc934375b449ac2c1b25e87.jpg',
        name: 'Miu Lê',
        caption: 'Có không giữ, mất mừng nhiều',
        image: 'https://photo-zmedia-zmp3.zmdcdn.me/w512_png/c9d887f4a0b149ef10a0',
        like: 225,
        comment: 218,
        date: '23 tháng 5 lúc 12:30',
    },
    {
        id: 11,
        avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/b/7/7/a/b77ac5aec77b7df5c628293f9e1d6232.jpg',
        name: 'Phan Duy Anh',
        caption: 'Thích một mình nhưng ngại cô đơn...',
        image: 'https://photo-zmedia-zmp3.zmdcdn.me/w512_png/fd5ab27695337c6d2522',
        like: 225,
        comment: 118,
        date: '23 tháng 5 lúc 18:30',
    },
    {
        id: 12,
        avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/b/a/d/2/bad27197c6774fc04c039c040ed8813c.jpg',
        name: 'Vũ',
        caption: 'Custom outfit a không để quần dơ.',
        image: 'https://photo-zmedia-zmp3.zmdcdn.me/w512_png/f54fe563c2262b787237',
        like: 55,
        comment: 14,
        date: '23 tháng 5 lúc 15:05',
    },
];

const Follow = () => {
    const [tab, settab] = useState('VN'); // 'VN', 'USUK', 'KPOP', "CPOP", "HOT"
    return (
        <div className="follow home">
            <div className="follow-nav">
                <div className="follow-tab">
                    <button className={`btn ${tab == 'VN' ? 'active' : ''}`} onClick={() => settab('VN')}>
                        Việt Nam
                    </button>

                    <button className={`btn ${tab == 'USUK' ? 'active' : ''}`} onClick={() => settab('USUK')}>
                        US-UK
                    </button>

                    <button className={`btn ${tab == 'KPOP' ? 'active' : ''}`} onClick={() => settab('KPOP')}>
                        KPOP
                    </button>

                    <button className={`btn ${tab == 'CPOP' ? 'active' : ''}`} onClick={() => settab('CPOP')}>
                        CPOP
                    </button>

                    <button className={`btn ${tab == 'HOT' ? 'active' : ''}`} onClick={() => settab('HOT')}>
                        NỔI BẬT
                    </button>
                </div>
            </div>

            <div className="follow-main">
                <div className="card-list-group">
                    <Swiper
                        loop
                        spaceBetween={40}
                        slidesPerView={2}
                        modules={[Autoplay, Navigation, Pagination]}
                        autoplay={{
                            delay: 3000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            576: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            992: {
                                slidesPerView: 5,
                            },

                            1200: {
                                slidesPerView: 4,
                            },

                            1300: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="home-singer">
                                <img
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/chi-dan.png"
                                    alt="chi-dan"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-singer">
                                <img
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/huong-ly.png"
                                    alt="huong-ly"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-singer">
                                <img
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png"
                                    alt="chi-dan"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-singer">
                                <img
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/justatee.png"
                                    alt="chi-dan"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-singer">
                                <img
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/karik.png"
                                    alt="chi-dan"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-singer">
                                <img
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/duc-phuc.png"
                                    alt="chi-dan"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-singer">
                                <img
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/trinh-thanh-binh.png"
                                    alt="chi-dan"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-singer">
                                <img
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/erik.png"
                                    alt="chi-dan"
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="new-feed-group">
                    <Grid container spacing={2}>
                        <Grid item sm={6} xs={12}>
                            {newFeeds.map((feed) => (
                                <Grid item sm={12} key={feed.id}>
                                    <NewFeed feed={feed} />
                                </Grid>
                            ))}
                        </Grid>

                        <Grid item sm={6} xs={12}>
                            {newFeeds2.map((feed) => (
                                <Grid item sm={12} key={feed.id}>
                                    <NewFeed feed={feed} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Follow;
