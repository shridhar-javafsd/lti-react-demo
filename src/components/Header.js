import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="header">
            <nav className="navbar bg-dark">
                <div>
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

