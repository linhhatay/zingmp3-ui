import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import HeaderOptions from '~/Shared/HeaderOptions';
import Search from '../Search';
import Modal from '~/modal';
import Button from '~/components/Button';
import { DisplayIcon, Avatar } from '~/components/Icons';
import './Header.css';
import { IoDiamondOutline } from 'react-icons/io5';
import { BsUpload } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';

import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

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
                {/* <Tippy delay={[0, 200]} content="Chủ đề" placement="bottom">
                    <div>
                        <Button primary leftIcon={<DisplayIcon />} onClick={handleShowModal}></Button>
                    </div>
                </Tippy>
                <Tippy delay={[0, 200]} content="Nâng cấp VIP" placement="bottom">
                    <div>
                        <Button
                            href="https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=icon-header"
                            primary
                            leftIcon={<IoDiamondOutline />}
                            target="_blank"
                        ></Button>
                    </div>
                </Tippy>
                <Tippy delay={[0, 200]} content="Tải lên" placement="bottom">
                    <div>
                        <Button primary leftIcon={<BsUpload />} className={cx('upload-btn')}>
                            <input type="file" name="myfile" title="" />
                        </Button>
                    </div>
                </Tippy>
                <Tippy delay={[0, 200]} content="Cài đặt" placement="bottom">
                    <div>
                        <Button primary leftIcon={<AiOutlineSetting />}></Button>
                    </div>
                </Tippy> */}
                <Button primary leftIcon={<DisplayIcon />} onClick={handleShowModal}></Button>
                <Button
                    href="https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=icon-header"
                    primary
                    leftIcon={<IoDiamondOutline />}
                    target="_blank"
                ></Button>{' '}
                <Button primary leftIcon={<BsUpload />} className={cx('upload-btn')}>
                    <input type="file" name="myfile" title="" />
                </Button>
                <Button primary leftIcon={<AiOutlineSetting />}></Button>
                <Button primary leftIcon={<Avatar />}></Button>
                {/* {HeaderOptions &&
                    HeaderOptions.map((item, index) => (
                        <Tippy key={index} delay={[0, 50]} content={item.title} placement="bottom">
                            <div className="header-right-option" onClick={handleShowModal}>
                                <div className="header-right-icon">{item.icon}</div>
                            </div>
                        </Tippy>
                    ))} */}
            </div>
            {showModal && <Modal setShowModal={setShowModal} />}
        </div>
    );
};

export default Header;
