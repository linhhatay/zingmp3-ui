import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { AiOutlinePlayCircle, AiOutlineSetting } from 'react-icons/ai';
import { BsArrowLeft, BsArrowRight, BsUpload } from 'react-icons/bs';
import { IoDiamondOutline } from 'react-icons/io5';
import { Avatar, DisplayIcon } from '~/components/Icons';
import Modal from '~/components/Modal';
import Search from '../Search';

import { useState } from 'react';
import { BiBlock } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { MdOutlineHighQuality } from 'react-icons/md';
import { RiArrowRightSLine, RiVipFill } from 'react-icons/ri';
import Menu from '~/components/Popper/Menu';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import './Header.css';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        leftIcon: <BiBlock />,
        title: 'Danh sách chặn',
    },
    {
        leftIcon: <MdOutlineHighQuality />,
        title: 'Chất lượng nhạc',
        rightIcon: <RiArrowRightSLine />,
        children: [
            {
                title: 'SQ • 128',
                desc: 'Giảm sử dụng dữ liệu cho các kết nối chậm hơn.',
            },
            {
                title: 'HQ • 320',
                desc: 'Kết hợp tốt nhất giữa việc sử dụng dữ liệu và chất lượng âm thanh.',
            },
        ],
    },
    {
        leftIcon: <AiOutlinePlayCircle />,
        title: 'Giao diện',
        rightIcon: <RiArrowRightSLine />,
    },
];

const USER_ITEM = [
    {
        leftIcon: <IoDiamondOutline />,
        title: 'Nâng cấp VIP',
        to: 'https://zingmp3.vn/vip/buyCode?utm_source=desktop&utm_campaign=VIP&utm_medium=avatar-buycode',
    },
    {
        leftIcon: <RiVipFill />,
        title: 'Mua code VIP',
        to: 'https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s',
    },
    {
        leftIcon: <FiLogOut />,
        title: 'Đăng xuất',
    },
];

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    return (
        <div className={cx('header')}>
            <div className={cx('header-left')}>
                <div className={cx('header__options hide-on-mobile')}>
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
                <Tippy delay={[0, 50]} content="Chủ đề" placement="bottom">
                    <div className="header-right-option" onClick={handleShowModal}>
                        <div className="header-right-icon">{<DisplayIcon />}</div>
                    </div>
                </Tippy>
                <Tippy delay={[0, 50]} content="Nâng cấp VIP" placement="bottom">
                    <a
                        className="header-right-option"
                        href="https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=icon-header"
                        target="_blank"
                    >
                        <div className="header-right-icon">{<IoDiamondOutline />}</div>
                    </a>
                </Tippy>
                <Tippy delay={[0, 50]} content="Tải lên" placement="bottom">
                    <div className="header-right-option upload-btn">
                        <div className="header-right-icon">{<BsUpload />}</div>
                        <input type="file" name="myfile" title="" />
                    </div>
                </Tippy>
                <Tippy delay={[0, 50]} content="Cài đặt" placement="bottom">
                    <div>
                        <Menu items={MENU_ITEMS}>
                            <div className="header-right-option">
                                <div className="header-right-icon">{<AiOutlineSetting />}</div>
                            </div>
                        </Menu>
                    </div>
                </Tippy>
                <Menu items={USER_ITEM}>
                    <div className="header-right-option">
                        <div className="header-right-icon">{<Avatar />}</div>
                    </div>
                </Menu>
            </div>
            {showModal && <Modal setShowModal={setShowModal} />}
        </div>
    );
};

export default Header;
