import Header from './Header';
import PlayerControls from './PlayerControls';
import Sidebar from './Sidebar';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
                <PlayerControls />
            </div>
            <div className="background"></div>
        </div>
    );
};

export default DefaultLayout;
