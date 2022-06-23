import { createSlice } from '@reduxjs/toolkit';
import { ListSong } from '../../shared/ListSong';

export const songsSlice = createSlice({
    name: 'song',
    initialState: {
        song: ListSong[0],
    },
    reducers: {
        getSong: (state, action) => {},

        getPlayerMusic: (state, action) => {
            state.song = ListSong.find((song) => song.position === action.payload);
        },

        nextSong: (state, action) => {
            state.song = ListSong.find((song) => song.position === action.payload);
        },

        prevSong: (state, action) => {
            state.song = ListSong.find((song) => song.position === action.payload);
        },

        randomSong: (state, action) => {
            state.song = ListSong.find((song) => song.position === action.payload);
        },
    },
});

export const { getSong, getPlayerMusic, nextSong, prevSong, randomSong } = songsSlice.actions;
export default songsSlice.reducer;
