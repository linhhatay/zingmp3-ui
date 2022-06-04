import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SongItem from '~/components/SongItem';
import styles from './Search.module.scss';
import './Search.css';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

const Searc = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    const debounce = useDebounce(searchValue, 500);

    const handleHideResult = () => {
        setShowResult(false);
    };

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        fetch(`https://music-player-pink.vercel.app/api/search?keyword=${encodeURIComponent(debounce)}`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data.songs);
            });
    }, [debounce]);

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            placement="bottom-start"
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Gợi ý kết quả</h4>
                        {searchResult.map((result) => (
                            <SongItem key={result.encodeId} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <form className="search">
                <div className="search-container">
                    <button className="search-btn">
                        <BsSearch className="search-btn-icon" />
                    </button>
                    <div className="search-wrapper">
                        <input
                            ref={inputRef}
                            value={searchValue}
                            type="text"
                            className="search-input"
                            placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV ..."
                            onChange={(e) => setSearchValue(e.target.value)}
                            spellCheck={false}
                            onFocus={() => setShowResult(true)}
                        />
                        {!!searchValue && (
                            <FaTimes
                                onClick={() => {
                                    setSearchValue('');
                                    setSearchResult([]);
                                    inputRef.current.focus();
                                }}
                                className={cx('search-icon')}
                            />
                        )}
                    </div>
                </div>
            </form>
        </HeadlessTippy>
    );
};

export default Searc;
