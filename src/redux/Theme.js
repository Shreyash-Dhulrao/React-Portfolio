import { createSlice } from "@reduxjs/toolkit";

export const ThemeMode = createSlice({
    name: "Theme",
    initialState : {
        value: "dark"
    },
    reducers: {
        ThemeToggle : (state,action)=>{
            let a = document.querySelector("html")
            a.classList.remove("dark", "light")
            state.value = action.payload
            a.classList.add(action.payload)
        }
    }
})

export const {ThemeToggle} = ThemeMode.actions

export default ThemeMode.reducer