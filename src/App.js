import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import './App.css';
import './styles/Grid.css';

import DefaultLayout from '~/layouts';
import config from './config';
import Album from './layouts/DefaultLayout/User/Album';
import MV from './layouts/DefaultLayout/User/MV';
import MyMusic from './layouts/DefaultLayout/User/Song/MyMusic';
import Podcast from './layouts/DefaultLayout/User/Podcast';
import Song from './layouts/DefaultLayout/User/Song';
import Upload from './layouts/DefaultLayout/User/Song/Upload';
import NewEpisode from './layouts/DefaultLayout/User/Podcast/NewEpisode';
import SaveEpisode from './layouts/DefaultLayout/User/Podcast/SaveEpisode';
import FollowedProgram from './layouts/DefaultLayout/User/Podcast/FollowedProgram';

function App() {
    function hasTouch() {
        return (
            'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
        );
    }

    if (hasTouch()) {
        // remove all the :hover stylesheets
        try {
            // prevent exception on browsers not supporting DOM styleSheets properly
            for (var si in document.styleSheets) {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;

                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;

                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) {}
    }
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            >
                                <Route path={config.routes.song} element={<Song></Song>}>
                                    <Route path={config.routes.favorite} element={<MyMusic />} />
                                    <Route path={config.routes.upload} element={<Upload />} />
                                </Route>
                                <Route path={config.routes.podcast} element={<Podcast />}>
                                    <Route path={config.routes.newEpisode} element={<NewEpisode />} />
                                    <Route path={config.routes.savedEpisode} element={<SaveEpisode />} />
                                    <Route path={config.routes.followedProgram} element={<FollowedProgram />} />
                                </Route>
                                <Route path={config.routes.album} element={<Album />}></Route>
                                <Route path={config.routes.mv} element={<MV />}></Route>
                            </Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
