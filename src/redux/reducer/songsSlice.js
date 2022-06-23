import { createSlice } from '@reduxjs/toolkit';
import { ListSong } from '~/shared/ListSong';

export const songSlice = createSlice({
    name: 'songs',
    initialState: {
        songs: ListSong,
    },
    reducers: {
        getListSong: (state) => {},
    },
});

export const { getListSong } = songSlice.actions;
export default songSlice.reducer;
