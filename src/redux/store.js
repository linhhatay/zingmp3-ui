import { configureStore } from '@reduxjs/toolkit';
import songSlice from './songSlice';
import songsSlice from './songsSlice';
import toast from './reducer/toastSlice';

export default configureStore({
    reducer: {
        song: songSlice,
        songs: songsSlice,
        toast: toast,
    },
});
