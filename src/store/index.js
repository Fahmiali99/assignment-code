import { configureStore } from "@reduxjs/toolkit";
import holiday from "./holiday";
import locations from "./location";


export const store = configureStore({
    reducer: {
        holidaydata: holiday,
        location: locations
    },
});