import React from 'react';
import classNames from 'classnames/bind';
import styles from './Toast.module.scss';

import { MdNotifications } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { hideToast } from '../redux/reducer/toastSlice';

const cx = classNames.bind(styles);

const Toast = () => {
    const dispatch = useDispatch();
    const toast = useSelector((state) => state.toast);

    const handleHideToast = () => {
        dispatch(hideToast());
    };

    return (
        <div className={cx('toast')}>
            <div className={cx('toast__icon')}>
                <MdNotifications />
            </div>
            <div className={cx('toast__body')}>
                <h3 className={cx('toast__title')}>{toast.title} </h3>
                <p className={cx('toast__msg')}>{toast.msg}</p>
            </div>
            <div className={cx('toast__close')} onClick={handleHideToast}>
                <FaTimes />
            </div>
        </div>
    );
};

export default Toast;
