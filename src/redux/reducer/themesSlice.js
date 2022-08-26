import { createSlice } from '@reduxjs/toolkit';

export const themesSlice = createSlice({
    name: 'themes',
    initialState: {
        name: 'Rose',
        themes: 'https://i.imgur.com/NTBYxXJ.jpg',
        color: '#061d50',
        isActive: true,
    },
    reducers: {
        switchTheme: (state, action) => {
            state.themes = action.payload.theme;
            state.name = action.payload.name;
            state.isActive = action.payload.isActive;
        },
    },
});

export const { switchTheme, switchColorHeader } = themesSlice.actions;
export default themesSlice.reducer;
