import { createSlice } from '@reduxjs/toolkit';

export const modal = createSlice({
    name: 'modal',
    initialState: {
        status: false,
    },
    reducers: {
        showModal: (state, action) => {
            state.status = true;
        },
        hideModal: (state, action) => {
            state.status = false;
        },
    },
});

export const { showModal, hideModal } = modal.actions;
export default modal.reducer;
