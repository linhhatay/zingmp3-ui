import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import banner from '~/shared/apiBanner';
import { sliderHome } from '~/shared/apiHome';
import { imageFooter } from '~/shared/footer';
import Carousel, { CarouselItem } from '~/layouts/components/Carousel';

const cx = classNames.bind(styles);

const Discover = () => {
    const settings = {
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <div className={cx('wrapper')}>
            <Slider {...settings} className={cx('slider')}>
                {banner.map((item) => (
                    <div className={cx('card')} key={item.type}>
                        <img className={cx('image')} src={item.banner} />
                    </div>
                ))}
            </Slider>
            <Carousel title="Có thể bạn muốn nghe">
                {sliderHome[0].map((item, index) => (
                    <CarouselItem key={index} data={item} />
                ))}
            </Carousel>
            <Carousel title="Có thể bạn muốn nghe">
                {sliderHome[1].map((item, index) => (
                    <CarouselItem key={index} data={item} />
                ))}
            </Carousel>
            <div className={cx('bottom')}>
                <h3 className={cx('title')}>ĐỐI TÁC ÂM NHẠC</h3>
                <div className={cx('partner')}>
                    {imageFooter.map((item, index) => (
                        <div className={cx('partner-item')} key={index}>
                            <img className={cx('partner-img')} src={item.image} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Discover;
