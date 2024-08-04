import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    holidaydata: {}
}

export const holiday = createSlice({
    name: "holiday",
    initialState,
    reducers: {
        setHoliday: (state, action) => {
            state.holidaydata = action.payload
        },
        setCreateHoliday: (state, action) => {
            state.holidaydata.push(action.payload);
        },
        setDeleteHoliday: (state, action) => {
            const deleteId = action.payload;
            state.holidaydata = state.holidaydata.filter(
              (e) => e.id !== deleteId
            );
          },
        setEditHoliday: (state, action) => {
            const update = action.payload;
            const index = state.holidaydata.findIndex(
                (e) => e.id === update.id
            );
            if (index !== -1) {
                state.holidaydata[index] = update;
            }
        },
    }
});

export const { setHoliday, setCreateHoliday,setDeleteHoliday, setEditHoliday } = holiday.actions;
export default holiday.reducer;