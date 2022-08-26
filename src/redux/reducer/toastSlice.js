import { createSlice } from '@reduxjs/toolkit';

export const toast = createSlice({
    name: 'toast',
    initialState: {
        title: 'Thông báo',
        msg: 'Tính năng hiện chưa được cập nhật, bạn vui lòng thông cảm :3',
        status: false,
    },
    reducers: {
        showToast: (state, action) => {
            state.status = true;
        },
        hideToast: (state, action) => {
            state.status = false;
        },
    },
});

export const { showToast, hideToast } = toast.actions;
export default toast.reducer;
