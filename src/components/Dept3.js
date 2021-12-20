import { useContext } from "react";
import { DeptContext } from "./context";

const Dept3 = (props) => {

    const dataInDept3 = useContext(DeptContext);

    return (
        <div className="container">
            <p className="display-4 text-primary" >Dept3 Component</p>
            <p>Dept3 component: {dataInDept3} </p>
            <div>
            </div>
        </div>
    );
}

export default Dept3;


// import { useEffect, useState } from "react";

// // also use redux store for this concept 


// const Dept3 = (props) => {

//     return (
//         <div className="container">
//             <p className="display-4 text-primary" >Dept3 Component</p>
//             <p>Dept3 component: {props.deptDataToPassDown} </p>
//             <div>
//             </div>
//         </div>
//     );
// }

// export default Dept3;


// import { useEffect, useState } from "react";

// // also use redux store for this concept 


// const Dept3 = (props) => {

//     return (
//         <div className="container">
//             <p className="display-4 text-primary" >Dept3 Component</p>
//             <p>Dept3 component: {props.deptDataToPassDown} </p>
//             <div>
//             </div>
//         </div>
//     );
// }

// export default Dept3;