import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import 'tippy.js/dist/tippy.css';
import HeaderOptions from '~/Shared/HeaderOptions';
import Search from '../Search/index';
import './Header.css';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <div className="header__options hide-on-mobile">
                    <button className="btn">
                        <BsArrowLeft className="btn-icon" />
                    </button>
                    <button className="btn">
                        <BsArrowRight className="btn-icon" />
                    </button>
                </div>
                <Search />
            </div>
            <div className="header-right">
                {HeaderOptions &&
                    HeaderOptions.map((item, index) => (
                        <Tippy key={index} delay={[0, 50]} content={item.title} placement="bottom">
                            <div className="header-right-option">
                                <div className="header-right-icon">{item.icon}</div>
                            </div>
                        </Tippy>
                    ))}
            </div>
        </div>
    );
};

export default Header;
