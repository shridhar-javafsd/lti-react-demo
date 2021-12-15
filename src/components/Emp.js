
// state - a object to store data of the component 
// React 16.8 onwards, state is available in function components also 
// react provides hooks (methods) to use state 

import { useState } from "react";

const Emp = (props) => {

    const [emp, setEmp] = useState({ eid: 101, firstName: 'Sonu', salary: 48000 });

    // how to create state with useState() hook
    const [num, setNum] = useState(0); // number 
    const [myName, setMyName] = useState(''); // string 
    const [isEmployed, setIsEmployed] = useState(false); // boolean 
    const [empObj, setEmpObj] = useState({});// object 
    const [skillSet, setSkillSet] = useState([]); // array 


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