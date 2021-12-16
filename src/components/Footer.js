
// const fun = (arg) => {
//     console.log(arg);
// }

import { useState } from "react";

const Footer = (props) => {

    const [dataInChild, setdataInChild] = useState(12);

    const passDataFromChild = () => {
        console.log('passDataFromChild');
        props.passData(dataInChild);
    }
    return (
        <div>
            <div>
                <p className="text-primary">Footer Component</p>
                <p>Data in child : {dataInChild}</p>
                {/* <p> {props.firstName} </p> */}
                {/* <p> {props.lastName} </p> */}
            </div>
            <div>
                <input type="submit" value="Click to pass data from child to parent"
                    onClick={passDataFromChild}></input>
            </div>
        </div>
    );
}

export default Footer;



