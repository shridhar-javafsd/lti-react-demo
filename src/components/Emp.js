import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addEmp } from '../redux/EmpSlice';
const Emp = () => {

    const [emp, setEmp] = useState({}); // object to store and display emp data 
    const [empInput, setEmpInput] = useState({}); // object to capture emp data 

    const dispatch = useDispatch();

    const empDataFromStore = useSelector((state) => state.emp.empData);

    const appUserDataFromStoreToEmp = useSelector((state) => state.appUser.appUserState);

    useEffect(() => {
        setEmp({ eid: '', firstName: '', salary: '' });
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
        console.log(empInput);
        dispatch(addEmp(empInput));
        evt.preventDefault();
    }

    return (
        <div className="container">
            <p className="display-4 text-primary">Emp Component</p>
            {/* <p> appUserDataFromStoreToEmp {appUserDataFromStoreToEmp.name} </p> */}
            <div>
                <p>Employee Data: {empDataFromStore.eid} {empDataFromStore.firstName} {empDataFromStore.salary} </p>
            </div>
            <div className="col-4">
                <form className="form form-group form-primary">
                    <input className="form-control mt-3" type="number" id="eid" name="eid" value={empInput.eid}
                        onChange={handleEmpChange} placeholder="Please enter eid" autoFocus ></input>
                    <input className="form-control mt-3" type="text" id="firstName" name="firstName" value={empInput.firstName}
                        onChange={handleEmpChange} placeholder="Please enter name"></input>
                    <input className="form-control mt-3" type="number" id="salary" name="salary" value={empInput.salary}
                        onChange={handleEmpChange} placeholder="Please enter salary"></input>
                    <input className="form-control mt-3 btn btn-primary" type="submit" id="submit" name="submit" value="Add Employee"
                        onClick={submitEmpInput}></input>
                </form>
            </div>
            <p className="display-4 text-primary">Emp Component</p>
            <div>
                <p>Employee Data: {emp.eid} {emp.firstName} {emp.salary} </p>
            </div>
            <div className="col-4">
                <form className="form form-group form-primary">
                    <input className="form-control mt-3" type="number" id="eid" name="eid" value={empInput.eid}
                        onChange={handleEmpChange} placeholder="Please enter eid"></input>
                    <input className="form-control mt-3" type="text" id="firstName" name="firstName" value={empInput.firstName}
                        onChange={handleEmpChange} placeholder="Please enter name"></input>
                    <input className="form-control mt-3" type="number" id="salary" name="salary" value={empInput.salary}
                        onChange={handleEmpChange} placeholder="Please enter salary"></input>
                    <input className="form-control mt-3 btn btn-primary" type="submit" id="submit" name="submit" value="Add Employee"
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
    // const [num, setNum] = useState(0); // number 
    // const [myName, setMyName] = useState(''); // string 
    // const [isEmployed, setIsEmployed] = useState(false); // boolean 
    // const [empObj, setEmpObj] = useState({});// object 
    // const [skillSet, setSkillSet] = useState([]); // array 

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