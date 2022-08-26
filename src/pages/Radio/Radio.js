import { Grid, Box } from '@mui/material';
import './Radio.scss';
import CardList from '~/pages/Radio/CardList/CardList';

const airRadio = [
    {
        id: 1,
        name: 'Đắp Chăn Nằm Nghe',
        image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/f/8/4/c/f84c36fa27e1243a86d48ec87bab01d0.jpg',
    },
    {
        id: 2,
        name: "Artist's story",
        image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/7/8/4/678408238d07e2012027a96bff12d196.jpg',
    },

    {
        id: 3,
        name: 'How2Money x Doctor',
        image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/b/0/d/d/b0dd70786bab81645d73e3b20002117d.jpg',
    },
    {
        id: 4,
        name: 'HIEU.TV',
        image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/0/d/b/1/0db18352212495c489e270b229a79216.jpg',
    },
];

const newRadio = [
    {
        id: 1,
        name: 'Book&Film',
        image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/8/7/9/d8798f02f337e1eb680c9e3e30de6f17.jpg',
    },
    {
        id: 2,
        name: 'Weekly Focus',
        image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/5/0/7/a5070f55a1688c101709da7800ef7bfa.jpg',
    },

    {
        id: 3,
        name: 'Cùng nhau đọc sách',
        image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/f/6/2/6/f626bc19c412f2ff020c66ae5b8cb3a0.jpg',
    },
    {
        id: 4,
        name: 'Udoo - Cùng đi trong bình an',
        image: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/e/5/b/a/e5ba32f51882faf77d17b14fda56b55e.jpg',
    },
];
const radio = [
    {
        id: 1,
        title: 'XONE Radio',
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-1.jpg',
    },
    {
        id: 2,
        title: 'V-POP',
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-2.jpg',
    },

    {
        id: 3,
        title: 'On Air',
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-3.jpg',
    },
    {
        id: 4,
        title: 'Bolero',
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-4.jpg',
    },
    {
        id: 5,
        title: 'Chạm',
        image: 'https://mp3-react-vinhbuihd.vercel.app/images/radio-5.jpg',
    },
];

const Radio = () => {
    return (
        <div className="radio home">
            <div className="card-list-group">
                <Grid container>
                    {radio.map((list) => (
                        <Grid item xs={4} sm={2.4} key={list.id}>
                            <div className="radio-box" key={list.id}>
                                <div className="radio-top">
                                    <img
                                        className="radio-top-img"
                                        src="https://mp3-react-vinhbuihd.vercel.app/svg/radio-1.svg"
                                        alt="radio"
                                    />
                                    <img
                                        className="radio-top-live-icon"
                                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                                        alt="live"
                                    />
                                    <CardList listSong={list} />
                                </div>
                                <div className="radio-bottom">{list.title}</div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>

            <div className="card-list-group">
                <h3 className="h3-heading">Khám phá podcast</h3>
                <Grid container spacing={3}>
                    {airRadio.map((list) => (
                        <Grid item xs={6} sm={3} key={list.id}>
                            <CardList listSong={list} />
                        </Grid>
                    ))}
                </Grid>
            </div>

            <div className="card-list-group">
                <h3 className="h3-heading">Chương Trình Mới</h3>
                <Grid container spacing={3}>
                    {newRadio.map((list) => (
                        <Grid item xs={6} sm={3} key={list.id}>
                            <CardList listSong={list} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default Radio;
