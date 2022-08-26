import config from '~/config';

import Home from '~/pages/Home';
import Discover from '~/pages/Discover';
import Follow from '~/pages/Follow';
import Radio from '~/pages/Radio/Radio';
import Zingchart from '~/pages/Zingchart';
import Details from '~/pages/Details';

const publicRoutes = [
    { path: config.routes.discover, component: Discover },
    { path: config.routes.mymusic, component: Home },
    { path: config.routes.follow, component: Follow },
    { path: config.routes.radio, component: Radio },
    { path: config.routes.zingchart, component: Zingchart },
    { path: config.routes.details, component: Details },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
