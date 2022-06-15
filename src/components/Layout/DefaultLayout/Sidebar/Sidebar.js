import React, { useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineRight } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import MenuList from '~/Shared/MenuList';
import './Sidebar.css';
import { LibrarySidebar } from '~/components/Layout/DefaultLayout/LibrarySidebar/LibrarySidebar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showToast, hideToast } from '../../../../redux/reducer/toastSlice';
import Toast from '../../../../toast/index';

const Sidebar = () => {
    // const [route, setRoute] = useState(MenuList[0][0].route);

    const toast = useSelector((state) => state.toast);
    const dispatch = useDispatch();

    useEffect(() => {
        const items = document.querySelectorAll('.navbar__item');
        const itemSubs = document.querySelectorAll('.navbar__sub-item');
        items[0].classList.add('active');

        function handleChangeActive() {
            items.forEach((item) => {
                item.classList.remove('active');
                this.classList.add('active');
            });

            // itemSubs.forEach((item) => {
            //     // item.classList.remove('active');
            //     // this.classList.add('active');
            //     dispatch(showToast());
            // });
        }

        function handleShowToast() {
            dispatch(showToast());
        }

        items.forEach((item) => {
            item.addEventListener('click', handleChangeActive);
        });

        itemSubs.forEach((item) => {
            item.addEventListener('click', handleShowToast);
        });
    });

    useEffect(() => {
        const interval = setTimeout(() => {
            dispatch(hideToast());
        }, 2000);

        return () => {
            clearTimeout(interval);
        };
    }, [toast.status]);

    return (
        <div className="sidebar">
            {toast.status && <Toast />}
            <div className="sidebar-logo hide-on-mobile">
                <img
                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
                    className="hide-on-tablet"
                />
                <img
                    src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.6.27/static/media/icon_zing_mp3_60.f6b51045.svg"
                    className="img-tablet"
                />
            </div>
            <div className="navbar">
                <ul className="navbar__menu">
                    {MenuList[0] &&
                        MenuList[0].map((item) => (
                            <li className="navbar__item" key={item.id}>
                                <Link to={item.route} className="navbar__link">
                                    <i>{item.icon}</i>
                                    <span className="hide-on-tablet">{item.name}</span>
                                    <img src={item.figure} className="hide-on-tablet hide-on-mobile" />
                                </Link>
                            </li>
                        ))}
                </ul>
                <div className="navbar-separate hide-on-mobile"></div>
                <div className="navbar-scroll hide-on-mobile">
                    <div className="navbar__sub">
                        <ul className="navbar__sub-menu">
                            {MenuList[1] &&
                                MenuList[1].map((item) => (
                                    <li className="navbar__sub-item" key={item.id}>
                                        <a>
                                            <i>{item.icon}</i>
                                            <span className="hide-on-tablet">{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                        </ul>
                        <div className="navbar__banner hide-on-tablet hide-on-mobile">
                            <div className="text">Nghe nhạc không quảng cáo cùng kho nhạc VIP</div>
                            <a>Nâng cấp VIP</a>
                        </div>
                        <LibrarySidebar title={'THƯ VIỆN'} icon={<BsPencil />} />
                    </div>
                </div>
                <button className="btn-on-tablet hide-on-mobile">
                    <i>
                        <AiOutlineRight className="icon" />
                    </i>
                </button>
                <button className="add-playlist hide-on-tablet hide-on-mobile">
                    <AiOutlinePlus className="icon" />
                    <span>Tạo playlist mới</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
