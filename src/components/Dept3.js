
import { useEffect, useState } from "react";

const Dept3 = (props) => {

    return (
        <div className="container">
            <p className="display-4 text-primary" >Dept3 Component</p>
            <p>Dept3 component: {props.deptDataToPassDown} </p>
            <div>
            </div>
        </div>
    );
}

export default Dept3;