
import Dept3 from "./Dept3";

const Dept2 = (props) => {
    return (
        <div className="container">
            <p className="display-4 text-primary" >Dept2 Component</p>
            <p>Dept2 component:</p>
            <Dept3 deptDataToPassDown={props.deptDataToPass} />
            <div>
            </div>
        </div>
    );
}

export default Dept2;