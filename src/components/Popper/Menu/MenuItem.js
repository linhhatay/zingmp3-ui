import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button
            className={cx('menu-item')}
            leftIcon={data.leftIcon}
            rightIcon={data.rightIcon}
            href={data.to}
            target="_blank"
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
