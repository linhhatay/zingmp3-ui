import { configureStore } from '@reduxjs/toolkit';
import songSlice from './songSlice';
import songsSlice from './songsSlice';

export default configureStore({
    reducer: {
        song: songSlice,
        songs: songsSlice,
    },
});
