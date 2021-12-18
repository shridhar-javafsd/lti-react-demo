import { createSlice } from "@reduxjs/toolkit";

console.log(`AppUserSlice invoked`);
const AppUserSlice = createSlice({

    name: 'appUser',

    initialState: {
        appUsersList: [],
        appUserState: {}
    },

    reducers: {
        getAppUserById: (state, action) => {
            console.log(`AppUserSlice getAppUserById`);
            state.appUserState = action.payload;
        },
        getAllAppUsers: (state, action) => {
            console.log(`AppUserSlice getAllAppUsers`);
            state.appUsersList = action.payload;
        }
        // , other methods similar to this 
    }

});

export const { getAppUserById, getAllAppUsers } = AppUserSlice.actions;

export default AppUserSlice.reducer;
