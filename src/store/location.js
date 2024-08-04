import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: {}
}

export const locations = createSlice({
    name: "locations",
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload
        }
    }
});

export const { setLocation } = locations.actions;
export default locations.reducer;