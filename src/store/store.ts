import { configureStore } from "@reduxjs/toolkit";
import asteroidSlice from "../slices/asteroidSlice";

export const store = configureStore({
    reducer: {
        asteroid: asteroidSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch