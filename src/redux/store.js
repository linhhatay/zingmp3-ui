import { configureStore } from '@reduxjs/toolkit';
import songSlice from './reducer/songSlice';
import songsSlice from './reducer/songsSlice';
import toast from './reducer/toastSlice';
import modal from './reducer/modalSlice';

export default configureStore({
    reducer: {
        song: songSlice,
        songs: songsSlice,
        toast: toast,
        modal: modal,
    },
});
