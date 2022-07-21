import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.origin = action.payload;
        },
        setTimeInformation: (state, action) => {
            state.origin = action.payload;
        },
    },
});

export const {setOrigin, setDestination, setTimeInformation} = navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;
