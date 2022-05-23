import { RiFolderMusicLine, RiNeteaseCloudMusicLine } from 'react-icons/ri';
import { FiDisc } from 'react-icons/fi';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { CgDisc, CgMusic } from 'react-icons/cg';
import { BiCategoryAlt } from 'react-icons/bi';
import { AiOutlineStar, AiOutlineVideoCamera } from 'react-icons/ai';

const MenuList = [
    [
        {
            id: 1,
            icon: <RiFolderMusicLine />,
            name: 'Cá Nhân',
            route: '/',
        },
        {
            id: 2,
            icon: <FiDisc />,
            name: 'Khám Phá',
            route: '/discover',
        },
        {
            id: 3,
            icon: <CgDisc />,
            name: '#zingchart',
            route: '/zingchart',
        },
        {
            id: 4,
            icon: <RiNeteaseCloudMusicLine />,
            name: 'Radio',
            route: '/radio',
            figure: 'https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg',
        },
        {
            id: 5,
            icon: <HiOutlineClipboardList />,
            name: 'Theo dõi',
            route: '/follow',
        },
    ],
    [
        {
            id: 1,
            icon: <CgMusic />,
            name: 'Nhạc Mới',
            route: '/',
        },
        {
            id: 2,
            icon: <BiCategoryAlt />,
            name: 'Thể Loại',
            route: '/',
        },
        {
            id: 3,
            icon: <AiOutlineStar />,
            name: 'Top 100',
            route: '/',
        },
        {
            id: 4,
            icon: <AiOutlineVideoCamera />,
            name: 'MV',
            route: '/',
        },
    ],
];

export default MenuList;
