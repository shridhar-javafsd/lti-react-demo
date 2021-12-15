
// state - a object to store data of the component 
// React 16.8 onwards, state is available in function components also 
// react provides hooks (methods) to use state 

import { useEffect, useState } from "react";

const Emp = (props) => {

    // create state - useState()
    const [emp, setEmp] = useState({});

    // initilize state - useEffect()
    useEffect(() => {
        setEmp({ eid: 101, firstName: 'Sonu', salary: 48000 });
        setMyName('Monu');
    }, []);

    // how to create state with useState() hook
    const [num, setNum] = useState(0); // number 
    const [myName, setMyName] = useState(''); // string 
    const [isEmployed, setIsEmployed] = useState(false); // boolean 
    const [empObj, setEmpObj] = useState({});// object 
    const [skillSet, setSkillSet] = useState([]); // array 

    // const emp = { eid: 101, firstName: 'Sonu', salary: 48000 };

    return (
        <div>
      <p className="display-4 text-primary">Emp Component</p>
            <p>Employee Data</p>
            <p> {emp.eid} {emp.firstName} {emp.salary} </p>
            <p>{myName}</p>
        </div>
    );

}

export default Emp;