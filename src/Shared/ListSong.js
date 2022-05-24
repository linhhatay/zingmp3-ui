// const Songs = [
//   {
//     id: 1,
//     favourite: false,
//     songName: "Bella Ciao",
//     artist: "El Profesor",
//     path: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fbellaciao.mp3?alt=media&token=e1dd8233-3521-4574-8957-d51af9a5db5c",
//     imgSrc:
//       "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fmoneyheist.jpg?alt=media&token=32baf3d7-0ab5-47d5-ba48-554792cea117",
//   },
//   {
//     id: 2,
//     favourite: false,
//     songName: "Beast",
//     artist: "Anirudh Ravichander",
//     path: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fbeast.mp3?alt=media&token=ebf29a01-079b-44eb-969a-57ee66a15ee8",
//     imgSrc:
//       "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fbeast.jpg?alt=media&token=7cc7c33e-8eac-4f7a-858d-75e75d4b609c",
//   },
//   {
//     id: 3,
//     favourite: false,
//     songName: "Joker - Rock and Roll",
//     artist: "Hildur Guðnadóttir",
//     path: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fjoker.mp3?alt=media&token=9e79751a-726d-4359-8a26-116db925f6ff",
//     imgSrc:
//       "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fjoker.jpg?alt=media&token=c3955b3c-7efd-4127-b119-6c6343dbc414",
//   },
//   {
//     id: 4,
//     favourite: false,
//     songName: "I Am A Peaky Blinder",
//     artist: "Otnicka",
//     path: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fpeaky-blinder.mp3?alt=media&token=2ddb5cfb-f4e0-4604-b77c-a7f63894d3ec",
//     imgSrc:
//       "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fpeakyblinder.jpg?alt=media&token=b83fbf86-37ef-47c2-948e-3447a22a2d07",
//   },
//   {
//     id: 5,
//     favourite: false,
//     songName: "Naanga Vera Maari",
//     artist: "Yuvan Shankar Raja",
//     path: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fvalimai.mp3?alt=media&token=97c769ab-e2fb-4562-90aa-18c73b320bde",
//     imgSrc:
//       "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fvalimai.jpg?alt=media&token=e11b839d-2514-4e1a-aa3a-20db3540a837",
//   },
//   {
//     id: 6,
//     songName: "Your Woman",
//     artist: "White Town",
//     path: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FWhite-Town-Your-Women.mp3?alt=media&token=91817445-98ba-4a99-a4b4-6218f2742eb3",
//     imgSrc:
//       "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fwhitetown.jpg?alt=media&token=25e1ec0c-24ec-4a11-a7a7-e55ec1fc50cf",
//   },
//   {
//     id: 7,
//     favourite: false,
//     songName: "Charlie",
//     artist: "Gopi Sundar",
//     path: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FCharlie.mp3?alt=media&token=5a129114-bb31-4a5a-95b7-1767829df21e",
//     imgSrc:
//       "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fcharlie.jpg?alt=media&token=81a1dc08-a9af-4db2-b74d-1f50315f9342",
//   },
//   {
//     id: 8,
//     favourite: false,
//     songName: "Mask Off",
//     artist: "Future",
//     path: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FFuture-Mask-Off.mp3?alt=media&token=92d8b60f-2bca-406f-914a-40bfb9a9324a",
//     imgSrc:
//       "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fmask.jpg?alt=media&token=22f0d7be-74b8-4c0d-849d-b777370e9559",
//   },
//   {
//     id: 9,
//     favourite: false,
//     songName: "Hey Mama",
//     artist: "David Guetta",
//     path: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FHeyMamaRingtone.mp3?alt=media&token=850148f5-8a15-4f87-995d-711138d5d7a0",
//     imgSrc:
//       "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fheymama.jpg?alt=media&token=2d8e8632-8051-4105-9760-3c715d797802",
//   },
//   {
//     id: 10,
//     favourite: false,
//     songName: "Turkish Folk Battle Song",
//     artist: "CVR Toon ",
//     path: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FPlevne-turkish.mp3?alt=media&token=72f7e03b-2865-4ffb-a2d1-da4c4557fb80",
//     imgSrc:
//       "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fturkish.jpg?alt=media&token=1f44ad17-43a8-4e1d-b232-a78b28cb9fe0",
//   },
// ];

const ListSong = [
    {
        id: 1,
        favourite: false,
        songName: 'Cứ Chill Thôi',
        artist: ['Chillies', 'Suni Hạ Linh', 'Rhymastic'],
        path: './assets/music/listSong1/song1.mp3',
        imgSrc: './assets/img/music/listSong1/song1.jpg',
        album: '',
        duration: '04:30',
    },
    {
        id: 2,
        favourite: false,
        songName: 'Crush',
        artist: ['WN', 'Vani', 'An An'],
        path: './assets/music/listSong1/song2.mp3',
        imgSrc: './assets/img/music/listSong1/song2.jpg',
        album: '',
        duration: '03:18',
    },
    {
        id: 3,
        favourite: false,
        songName: 'Vô Tình',
        artist: ['Xesi', 'Hoaprox'],
        path: './assets/music/listSong1/song3.mp3',
        imgSrc: './assets/img/music/listSong1/song3.jpg',
        album: 'Vô Tình (Single)',
        duration: '04:33',
    },
    {
        id: 4,
        favourite: false,
        songName: "Because I'm Stupid",
        artist: ['SS501'],
        path: './assets/music/listSong1/song4.flac',
        imgSrc: './assets/img/music/listSong1/song4.jpg',
        album: 'Boys Over Flower OST',
        duration: '04:20',
    },
    {
        id: 5,
        favourite: false,
        songName: 'Mama Boy',
        artist: ['AMEE'],
        path: './assets/music/listSong1/song5.mp3',
        imgSrc: './assets/img/music/listSong1/song5.jpg',
        album: 'dreeAMEE',
        duration: '03:24',
    },
    {
        id: 6,
        favourite: false,
        songName: 'Cửu Vĩ Hồ',
        artist: ['Yun', 'Dr A'],
        path: './assets/music/listSong1/song6.mp3',
        imgSrc: './assets/img/music/listSong1/song6.jpg',
        album: '',
        duration: '06:05',
    },
    {
        id: 7,
        favourite: false,
        songName: 'Anh Đã Quen Với Cô Đơn',
        artist: ['Soobin Hoàng Sơn'],
        path: './assets/music/listSong1/song7.mp3',
        imgSrc: './assets/img/music/listSong1/song7.jpg',
        album: 'Anh Đã Quen Với Cô Đơn (Single)',
        duration: '03:55',
    },
    {
        id: 8,
        favourite: false,
        songName: 'Túy Âm',
        artist: ['Xesi', 'Masew', 'Nhật Nguyễn'],
        path: './assets/music/listSong1/song8.mp3',
        imgSrc: './assets/img/music/listSong1/song8.jpg',
        album: 'Túy Âm (Single)',
        duration: '03:22',
    },
    {
        id: 9,
        favourite: false,
        songName: 'Kém Duyên',
        artist: ['Rum', 'NIT', 'Masew'],
        path: './assets/music/listSong1/song9.mp3',
        imgSrc: './assets/img/music/listSong1/song9.jpg',
        album: 'Kém Duyên (Single)',
        duration: '03:44',
    },
    {
        id: 10,
        favourite: false,
        songName: 'Tình Bạn Diệu Kì',
        artist: ['AMEE', 'Ricky Star', 'Lăng LD'],
        path: './assets/music/listSong1/song10.flac',
        imgSrc: './assets/img/music/listSong1/song10.jpg',
        album: '',
        duration: '03:08',
    },
    {
        id: 11,
        favourite: false,
        songName: 'Em Có Nghe',
        artist: ['Kha'],
        path: './assets/music/listSong1/song11.mp3',
        imgSrc: './assets/img/music/listSong1/song11.jpg',
        album: '',
        duration: '04:15',
    },
    {
        id: 12,
        favourite: false,
        songName: 'Lạc Trôi',
        artist: ['Sơn Tùng M-TP'],
        path: './assets/music/listSong1/song12.mp3',
        imgSrc: './assets/img/music/listSong1/song12.jpg',
        album: '',
        duration: '03:53',
    },
    {
        id: 13,
        favourite: false,
        songName: 'Một Năm Mới Bình An',
        artist: ['Sơn Tùng MTP'],
        path: './assets/music/listSong1/song13.mp3',
        imgSrc: './assets/img/music/listSong1/song13.jpg',
        album: '',
        duration: '04:07',
    },
    {
        id: 14,
        favourite: false,
        songName: 'Hongkong1 (Official Version)',
        artist: ['Nguyễn Trọng Tài', 'San Ji', 'Double X'],
        path: './assets/music/listSong1/song14.mp3',
        imgSrc: './assets/img/music/listSong1/song14.jpg',
        album: '',
        duration: '04:13',
    },
    {
        id: 15,
        favourite: false,
        songName: 'Gác Lại Âu Lo',
        artist: ['Da LAB', 'Miu Lê'],
        path: './assets/music/listSong1/song15.mp3',
        imgSrc: './assets/img/music/listSong1/song15.jpg',
        album: '',
        duration: '04:42',
    },
    {
        id: 16,
        favourite: false,
        songName: 'Chạy Ngay Đi',
        artist: ['Sơn Tùng MTP'],
        path: './assets/music/listSong1/song16.mp3',
        imgSrc: './assets/img/music/listSong1/song16.jpg',
        album: '',
        duration: '04:08',
    },
    {
        id: 17,
        favourite: false,
        songName: 'Cùng Anh',
        artist: ['Ngọc Dolil', 'Hagi', 'STee'],
        path: './assets/music/listSong1/song17.mp3',
        imgSrc: './assets/img/music/listSong1/song17.jpg',
        album: '',
        duration: '03:17',
    },
    {
        id: 18,
        favourite: false,
        songName: 'Hãy Trao Cho Anh',
        artist: ['Sơn Tùng MTP'],
        path: './assets/music/listSong1/song18.mp3',
        imgSrc: './assets/img/music/listSong1/song18.jpg',
        album: '',
        duration: '04:05',
    },
    {
        id: 19,
        favourite: false,
        songName: 'Tộc Ca',
        artist: ['Phúc Du', 'SONBEAT'],
        path: './assets/music/listSong1/song19.mp3',
        imgSrc: './assets/img/music/listSong1/song19.jpg',
        album: '',
        duration: '03:11',
    },
    {
        id: 20,
        favourite: false,
        songName: 'Thiên Lý Ơi',
        artist: ['Jack', 'Bikay'],
        path: './assets/music/listSong1/song20.mp3',
        imgSrc: './assets/img/music/listSong1/song20.jpg',
        album: '',
        duration: '04:16',
    },
    {
        id: 21,
        favourite: false,
        songName: 'Phố Đã Lên Đèn',
        artist: ['Phố Đã Lên Đèn'],
        path: './assets/music/listSong1/song21.mp3',
        imgSrc: './assets/img/music/listSong1/song21.jpg',
        album: '',
        duration: '04:04',
    },
    {
        id: 22,
        favourite: false,
        songName: 'BlackJack',
        artist: ['Soobin', 'Binz'],
        path: './assets/music/listSong2/song20.webm',
        imgSrc: './assets/img/music/listSong2/song20.jpg',
        album: 'BlackJack (Single)',
        duration: '03:17',
    },
];
export { ListSong };
