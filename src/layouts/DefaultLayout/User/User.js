import { useEffect } from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
import Button from '~/components/Button';
import './User.css';

const User = ({ children }) => {
    useEffect(() => {
        const navItems = document.querySelectorAll('.user__nav-item');
        navItems[0].classList.add('active');

        function handleChangeActive() {
            navItems.forEach((item) => {
                item.classList.remove('active');
                this.classList.add('active');
            });
        }

        navItems.forEach((item) => {
            item.addEventListener('click', handleChangeActive);
        });
    }, []);

    // useEffect(() => {
    //     const songItems = document.querySelectorAll('.user__songs-item');
    //     songItems[0].classList.add('active');
    //     function handleActiveSong() {
    //         songItems.forEach((item) => {
    //             item.classList.remove('active');
    //             this.classList.add('active');
    //         });
    //     }
    //     songItems.forEach((item) => {
    //         item.addEventListener('click', handleActiveSong);
    //     });
    // }, []);

    return (
        <div className="user">
            <div className="user-container">
                <div className="user-content">
                    <div className="user-header">
                        <h1 className="user-title">Thư viện</h1>
                        <button className="user-header-btn">
                            <AiOutlinePlayCircle className="user-header-icon" />
                        </button>
                    </div>
                    <div className="user-bottom">
                        <div className="user__nav">
                            <div className="user__nav-content">
                                <nav className="user__nav-list">
                                    <Button text className="user__nav-item" to="/mymusic/song/favorite">
                                        BÀI HÁT
                                    </Button>
                                    <Button text className="user__nav-item" to="/mymusic/podcast">
                                        PODCAST
                                    </Button>
                                    <Button text className="user__nav-item" to="/mymusic/album">
                                        ALBUM
                                    </Button>
                                    <Button text className="user__nav-item" to="/mymusic/mv">
                                        MV
                                    </Button>
                                </nav>
                            </div>
                        </div>
                        <div className="user__content">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
