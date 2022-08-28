import classNames from 'classnames/bind';
import { CgClose } from 'react-icons/cg';
import listThemes from '~/shared/ListThemes';
import styles from './Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '~/redux/reducer/themesSlice';
import { AiFillCheckCircle } from 'react-icons/ai';

const cx = classNames.bind(styles);

const Modal = ({ setShowModal }) => {
    const dispatch = useDispatch();

    const handleSwitchTheme = (theme, name) => {
        const setTheme = {
            theme: theme,
            name: name,
        };
        dispatch(switchTheme(setTheme));
        setShowModal(false);
    };

    const handlePreviewTheme = (theme, name) => {
        const setTheme = {
            theme: theme,
            name: name,
        };
        dispatch(switchTheme(setTheme));
    };

    const themesData = listThemes.map((item, index) => (
        <div key={index}>
            <h3 className={cx('themes__title')}>{item.type}</h3>
            <div className={cx('row sm-gutter')}>
                {item.themes.map((theme, index) => (
                    <div className={cx('col l-2 m-3 c-12')} key={index}>
                        <div className={cx('themes__item-wrapper')}>
                            <div className={cx('themes__item')}>
                                <div className={cx('themes__img')}>
                                    <img className={cx(['themes__link'])} src={theme.image} />
                                    {/* <span className={cx('themes__icon')}>
                                        <AiFillCheckCircle />
                                    </span> */}
                                </div>
                                <div className={cx('themes__hover')}>
                                    <div className={cx('themes__btn')}>
                                        <button onClick={() => handleSwitchTheme(theme.themes, theme.name)}>
                                            ÁP DỤNG
                                        </button>
                                        <button onClick={() => handlePreviewTheme(theme.themes, theme.name)}>
                                            XEM TRƯỚC
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <h4 className={cx('themes__name')}>{theme.name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ));
    return (
        <div className={cx('modal')} onClick={() => setShowModal(false)}>
            {/* Ngăn chặn nổi bọt để ẩn modal */}
            <div className={cx('modal__content')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('modal__heading')}>
                    <h3 className={cx('modal__title')}>Giao Diện</h3>
                    <button className={cx('modal__btn')} onClick={() => setShowModal(false)}>
                        <CgClose />
                    </button>
                </div>
                <div className={cx('themes')}>{themesData}</div>
            </div>
        </div>
    );
};

export default Modal;
