import classNames from 'classnames/bind';
import { CgClose } from 'react-icons/cg';
import listThemes from '~/shared/ListThemes';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

const Modal = ({ setShowModal }) => {
    const themesData = listThemes.map((item, index) => (
        <div key={index}>
            <h3 className={cx('themes__title')}>{item.type}</h3>
            <div className={cx('row sm-gutter')}>
                {item.themes.map((theme, index) => (
                    <div className={cx('col l-2 m-3 c-4')} key={index}>
                        <div className={cx('themes__item-wrapper')}>
                            <div className={cx('themes__item')}>
                                <div className={cx('themes__img')}>
                                    <img className={cx('themes__link')} src={theme.image} />
                                </div>
                                <div className={cx('themes__hover')}>
                                    <div className={cx('themes__btn')}>
                                        <button>ÁP DỤNG</button>
                                        <button>XEM TRƯỚC</button>
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
