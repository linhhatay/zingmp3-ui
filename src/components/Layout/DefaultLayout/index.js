import Header from './Header';
import PlayerControls from './PlayerControls';
import Sidebar from './Sidebar';
import User from './User';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{<User /> || { children }}</div>
                <PlayerControls />
            </div>
            <div className="background"></div>
        </div>
    );
};

export default DefaultLayout;
