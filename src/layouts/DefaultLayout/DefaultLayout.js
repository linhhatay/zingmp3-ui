import Header from './Header';
import PlayerControls from './PlayerControls';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';

const DefaultLayout = ({ children }) => {
    const themes = useSelector((state) => state.themes);
    return (
        <div data-theme={themes.name}>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
                <PlayerControls />
            </div>
            <div className="background" style={{ background: `url(${themes.themes})` }}></div>
        </div>
    );
};

export default DefaultLayout;
