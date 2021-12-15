
// components 
// two types - 
// 1. function components 
// 2. class components 

import React from "react";

class Header extends React.Component {

    render = () => {
        return (
            <div>
                <p>This is header</p>
            </div>
        );
    };

}

export default Header;

// 2. function component 

// const Header = () => {

//     return (
//         <div>
//             <p>This is header</p>
//         </div>
//     );
// }

// export default Header;