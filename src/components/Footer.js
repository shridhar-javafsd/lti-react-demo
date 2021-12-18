
const Footer = () => {

    return (

        <footer class="footer bg-secondary  pt-3 p-3">
            <div>
                <span class="text-dark text-center">React demo app for LTI trainees Dec 2021 </span>
            </div>
        </footer>

    );
}

export default Footer;



// // const fun = (arg) => {
// //     console.log(arg);
// // }

// import { useState } from "react";

// const Footer = (props) => {

//     const [dataInChild, setdataInChild] = useState(12);
//     // const [dataInChild, setdataInChild] = useState({});

//     const passDataFromChild = () => {
//         console.log('passDataFromChild');
//         props.passData(dataInChild);
//     }
//     return (
//         <div>
//             <div>
//                 <p className="text-primary">Footer Component</p>
//                 <p>Data in child : {dataInChild}</p>
//                 {/* <p> {props.firstName} </p> */}
//                 {/* <p> {props.lastName} </p> */}
//             </div>
//             <div>
//                 <input type="submit" value="Click to pass data from child to parent"
//                     onClick={passDataFromChild}></input>
//             </div>
//         </div>
//     );
// }

// export default Footer;


