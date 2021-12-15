

import { useEffect, useState } from "react";

const Dept = (props) => {
    const [dep, setDep] = useState({});

    useEffect(() => {
        setDep({ did: 11, dName: 'HR', city: 'Hyderabad' });
    }, []);

    return (
        <div>
            <p className="display-4 text-primary" >Dept Component</p>
            <p>Department Data</p>
            <p> {dep.did} {dep.dName} {dep.city} </p>
        </div>
    );

}

export default Dept;