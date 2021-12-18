import { createSlice } from "@reduxjs/toolkit";

console.log(`EmpSlice invoked`);
const EmpSlice = createSlice({

    name: 'emp',

    initialState: {
        // empList: [],
        empData: {}
    },

    reducers: {
        addEmp: (state, action) => {
            console.log(`EmpSlice addEmp`);
            state.empData = action.payload;
        },
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

export const { addEmp, getEmpById, /* getAllEmps */ } = EmpSlice.actions;

export default EmpSlice.reducer;
