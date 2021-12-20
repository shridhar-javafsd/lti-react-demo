
// context API 

import { useEffect, useState } from "react";
import Dept2 from "./Dept2";

const Dept = () => {
    const [deptData, setDeptData] = useState('');

    useEffect(() => {
        setDeptData('Some department data...');
    }, []);

    return (
        <div className="container">
            <p className="display-4 text-primary" >Dept1 Component</p>
            <p>Dept1 component: {deptData} </p>
            <Dept2 deptDataToPass={deptData} />
            <div>
            </div>
        </div>
    );
}

export default Dept;


// import { useEffect, useState } from "react";

// const Dept = (props) => {
//     const [dep, setDep] = useState({});

//     useEffect(() => {
//         setDep({ did: 11, dName: 'HR', city: 'Hyderabad' });
//     }, []);

//     return (
//         <div className="container">
//             <div>
//                 <p className="display-4 text-primary" >Dept Component</p>
//                 <p>Department Data</p>
//                 <p> {dep.did} {dep.dName} {dep.city} </p>
//             </div>
//             <div>
//                 <p className="display-4 text-primary" >Dept Component</p>
//                 <p>Department Data</p>
//                 <p> {dep.did} {dep.dName} {dep.city} </p>
//             </div>
//             <div>
//                 <p className="display-4 text-primary" >Dept Component</p>
//                 <p>Department Data</p>
//                 <p> {dep.did} {dep.dName} {dep.city} </p>
//             </div>
//             <div>
//                 <p className="display-4 text-primary" >Dept Component</p>
//                 <p>Department Data</p>
//                 <p> {dep.did} {dep.dName} {dep.city} </p>
//             </div>
//             <div>
//                 <p className="display-4 text-primary" >Dept Component</p>
//                 <p>Department Data</p>
//                 <p> {dep.did} {dep.dName} {dep.city} </p>
//             </div>
//             <div>
//                 <p className="display-4 text-primary" >Dept Component</p>
//                 <p>Department Data</p>
//                 <p> {dep.did} {dep.dName} {dep.city} </p>
//             </div>
//         </div>
//     );

// }

// export default Dept;