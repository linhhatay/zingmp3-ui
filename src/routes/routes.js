import config from '~/config';

import Home from '~/pages/Home';
import Discover from '~/pages/Discover';
import Follow from '~/pages/Follow';
import Radio from '~/pages/Radio';
import Zingchart from '~/pages/Zingchart';
import MyMusic from '~/layouts/DefaultLayout/User/Song/MyMusic';
import Upload from '~/layouts/DefaultLayout/User/Song/Upload';
import Song from '~/layouts/DefaultLayout/User/Song';
import Podcast from '~/layouts/DefaultLayout/User/Podcast';
import Album from '~/layouts/DefaultLayout/User/Album';
import MV from '~/layouts/DefaultLayout/User/MV';

const publicRoutes = [
    { path: config.routes.discover, component: Discover },
    { path: config.routes.mymusic, component: Home },
    { path: config.routes.follow, component: Follow },
    { path: config.routes.radio, component: Radio },
    { path: config.routes.zingchart, component: Zingchart },
];

const privateRoutes = [];

const nestedRoutes = [
    { path: config.routes.song, component: Song },
    { path: config.routes.podcast, component: Podcast },
    { path: config.routes.album, component: Album },
    { path: config.routes.mv, component: MV },
    { path: config.routes.favorite, component: MyMusic },
    { path: config.routes.upload, component: Upload },
];

export { publicRoutes, privateRoutes, nestedRoutes };
