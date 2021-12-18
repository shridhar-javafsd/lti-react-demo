import { configureStore } from "@reduxjs/toolkit";
import AppUserSlice from "./AppUserSlice";

// steps to create and use redux store - 
// 1. create store - only one 
// 2. provide store to index.js 
// 3. create slices for each components 
// 4. use slices in the components 

console.log(`store initilized`);

const store = configureStore(
    {
        reducer: {
            appUser: AppUserSlice
            // add reducers here 
        }
    }
);

export default store;