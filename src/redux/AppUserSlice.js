import { createSlice } from "@reduxjs/toolkit";

const AppUserSlice = createSlice({

    name: 'appUser',

    initialState: {
        
        appUserState: {}

    },

    reducers: {
        getAppUserById: (state, action) => {
            console.log(`AppUserSlice getAppUserById`);
            state.appUserState = action.payload;
        }
        // , other methods similar to this 
    }

});

export const { getAppUserById } = AppUserSlice.actions;

export default AppUserSlice.reducer;
