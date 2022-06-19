import { createSlice } from '@reduxjs/toolkit';
import { ListSong } from '../../shared/ListSong';

export const songsSlice = createSlice({
    name: 'song',
    initialState: {
        song: {
            id: 1,
            favourite: false,
            songName: 'Cứ Chill Thôi',
            artist: ['Chillies', 'Suni Hạ Linh', 'Rhymastic'],
            path: './assets/music/listSong1/song1.mp3',
            imgSrc: './assets/img/music/listSong1/song1.jpg',
            album: '',
            duration: '04:30',
            active: 'active',
        },
    },
    reducers: {
        getSong: (state, action) => {},

        getPlayerMusic: (state, action) => {
            state.song = ListSong.find((song) => song.id === action.payload);
        },

        nextSong: (state, action) => {
            state.song = ListSong.find((song) => song.id === action.payload);
        },

        prevSong: (state, action) => {
            state.song = ListSong.find((song) => song.id === action.payload);
        },

        randomSong: (state, action) => {
            state.song = ListSong.find((song) => song.id === action.payload);
        },
    },
});

export const { getSong, getPlayerMusic, nextSong, prevSong, randomSong } = songsSlice.actions;
export default songsSlice.reducer;
