import { createSlice } from "@reduxjs/toolkit";

console.log(`EmpSlice invoked`);
const EmpSlice = createSlice({

    name: 'emp',

    initialState: {
        // empList: [],
        empData: {}
    },

    reducers: {
        getEmpById: (state, action) => {
            console.log(`EmpSlice getempById`);
            state.empData = action.payload;
        }
        // ,
        // getAllEmps: (state, action) => {
        //     console.log(`EmpSlice getAllEmps`);
        //     state.empList = action.payload;
        // }
        // , other methods similar to this 
    }

});

export const { getEmpById, /* getAllEmps */ } = AppUserSlice.actions;

export default EmpSlice.reducer;
