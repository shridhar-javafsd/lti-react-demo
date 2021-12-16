
import { useEffect, useState } from "react";

const Emp = (props) => {

    const [emp, setEmp] = useState({});
    const [empInput, setEmpInput] = useState({});

    useEffect(() => {
        setEmp({ eid: 101, firstName: 'Sonu', salary: 48000 });
        setEmpInput({ eid: '', firstName: '', salary: '' });
    }, []);

    const handleEmpChange = (evt) => {
        console.log(evt.target.value);
        setEmpInput({
            ...empInput,
            [evt.target.name]: evt.target.value
        });
    }

    const submitEmpInput = (evt) => {
        console.log(evt.target.value);
        setEmp(empInput);
        evt.preventDefault();
    }

    return (
        <div>
            <p className="display-4 text-primary">Emp Component</p>
            <div>
                <p>Employee Data</p>
                <p> {emp.eid} {emp.firstName} {emp.salary} </p>
            </div>
            <div>
                <form >
                    <input type="number" id="eid" name="eid" value={empInput.eid}
                        onChange={handleEmpChange} placeholder="Please enter eid"></input>
                    <input type="text" id="firstName" name="firstName" value={empInput.firstName}
                        onChange={handleEmpChange} placeholder="Please enter name"></input>
                    <input type="number" id="salary" name="salary" value={empInput.salary}
                        onChange={handleEmpChange} placeholder="Please enter salary"></input>
                    <input type="submit" id="submit" name="submit" value="submit"
                        onClick={submitEmpInput}></input>
                </form>
            </div>
        </div>
    );

}

export default Emp;













// // state - a object to store data of the component 
// // React 16.8 onwards, state is available in function components also 
// // react provides hooks (methods) to use state 

// import { useEffect, useState } from "react";

// const Emp = (props) => {

//     // create state - useState()
//     const [emp, setEmp] = useState({});
//     const [empInput, setEmpInput] = useState({});

//     // initilize state - useEffect()
//     useEffect(() => {
//         setEmp({ eid: 101, firstName: 'Sonu', salary: 48000 });
//         setEmpInput({ eid: '', firstName: '', salary: '' });
//     }, []);

//     // how to create state with useState() hook
//     const [num, setNum] = useState(0); // number 
//     const [myName, setMyName] = useState(''); // string 
//     const [isEmployed, setIsEmployed] = useState(false); // boolean 
//     const [empObj, setEmpObj] = useState({});// object 
//     const [skillSet, setSkillSet] = useState([]); // array 

//     // const emp = { eid: 101, firstName: 'Sonu', salary: 48000 };

//     return (
//         <div>
//             <p className="display-4 text-primary">Emp Component</p>
//             <div>
//                 <p>Employee Data</p>
//                 <p> {emp.eid} {emp.firstName} {emp.salary} </p>
//             </div>
//             <div>
//                 <form >
//                     <input id="eid" name="eid" value={empInput.eid} onChange="" placeholder="Please enter eid"></input>
//                     <input id="firstName" name="firstName" value={empInput.firstName} onChange="" placeholder="Please enter name"></input>
//                     <input id="salary" name="salary" value={empInput.salary} onChange="" placeholder="Please enter salary"></input>
//                     <input id="submit" name="submit" value="submit" onClick=""></input>
//                 </form>
//             </div>
//         </div>
//     );

// }

// export default Emp;