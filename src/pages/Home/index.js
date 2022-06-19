import React from 'react';
import User from '~/layouts/DefaultLayout/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { nestedRoutes } from '~/routes';
import useRoutes from 'react-router-dom';
import Song from '~/layouts/DefaultLayout/User/Song';
import MyMusic from '~/layouts/DefaultLayout/User/MyMusic';

const Home = ({ children }) => {
    return (
        <>
            <User>
                <Routes>
                    <Route path="/mymusic/song" element={Song} />
                </Routes>
            </User>
        </>
    );
};

export default Home;
