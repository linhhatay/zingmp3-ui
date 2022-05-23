import Home from '~/pages/Home';
import Discover from '~/pages/Discover';
import Follow from '~/pages/Follow';
import Radio from '~/pages/Radio';
import Zingchart from '~/pages/Zingchart';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/discovver ', component: Discover },
    { path: '/zingchart ', component: Zingchart },
    { path: '/radio ', component: Radio },
    { path: '/follow ', component: Follow },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
