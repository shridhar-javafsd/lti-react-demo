import { configureStore } from "@reduxjs/toolkit";
import AppUserSlice from "./AppUserSlice";
import EmpSlice from "./EmpSlice";

// steps to create and use redux store - 
// 1. create store - only one 
// 2. provide store to index.js 
// 3. create slices for each components 
// 4. use slices in the components 

console.log(`store initilized`);

const store = configureStore(
    {
        reducer: {
            appUser: AppUserSlice,
            emp: EmpSlice
            // add reducers here 
        }
    }
);

export default store;


// state = store;
// state.appUser.appUserState
// state.appUser.appUsersList
// state.emp.empData











