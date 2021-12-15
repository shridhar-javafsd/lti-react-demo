
// state - a object to store data of the component 
// React 16.8 onwards, state is available in function components also 
// react provides hooks (methods) to use state 

import { useState } from "react";

const Emp = (props) => {

    const [emp, setEmp] = useState({});

    // const emp = { eid: 101, firstName: 'Sonu', salary: 48000 };

    return (
        <div>
            <p>Emp Component</p>
            <h1>Employee Data</h1>
            <p> {emp.eid} {emp.firstName} {emp.salary} </p>
        </div>

    );

}

export default Emp;