import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="header sticky-top">
            <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    {/* <Link className="navbar-brand" to="/">LTI</Link> */}
                    <Link className="navbar-brand" to="/">
                        <img height="24px" src="https://www.lntinfotech.com/wp-content/uploads/2017/05/LTI_Lets_Solve_wh.jpg" alt="LTI" ></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#abc">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="abc" >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/emp">Emp</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/appuser">AppUser</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dept">Dept</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;


// components 
// two types - 
// 1. function components 
// 2. class components 

// 1. function component 


// 2. class components 

// import React from "react";

// class Header extends React.Component {

//     render = () => {
//         return (
//             <div>
//                 <p>This is header</p>
//             </div>
//         );
//     };
// }

// export default Header;

