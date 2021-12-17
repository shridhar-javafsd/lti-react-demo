import axios from "axios";
import { useState } from "react";

const title = "Mr"; // 'Mr' `Mr`
const fullName = title + ' Anil Joshi';
console.log(fullName);
// Mr Anil Joshi 

const AppUserComp = () => {

    const [appUser, setAppUser] = useState({});
    const [appUsersList, setAppUsersList] = useState([]);

    const [uid, setUid] = useState('');

    const handleUidInput = (evt) => {
        setUid(evt.target.value);
    }

    const submitGetAppUserById = (evt) => {
        console.log('submitGetAppUserById');
        // axios.get('https://jsonplaceholder.typicode.com/users/' + uid)
        axios.get(`https://jsonplaceholder.typicode.com/users/${uid}`)
            .then((response) => {
                setAppUser(response.data);
                console.log(appUser);
            })
            .catch((error) => {
                console.log(error.message);
            });
        evt.preventDefault();
    }

    const submitGetAllAppUser = (evt) => {
        console.log('submitGetAppUserById');
        axios.get(`https://jsonplaceholder.typicode.com/users/`)
            .then((response) => {
                setAppUsersList(response.data);
                console.log(appUsersList);
            })
            .catch((error) => {
                console.log(error.message);
            });
        evt.preventDefault();
    }



    return (
        <div className="container">
            <p className="display-4 text-primary">App User Component</p>
            <div>
                <div>
                    <p>get App User by id: </p>
                </div>
                <div className="col-4">
                    <form className="form form-group form-primary">
                        <input className="form-control mt-3" type="number" id="uid" name="uid" value={uid}
                            onChange={handleUidInput} placeholder="Please enter userid"></input>
                        <input className="form-control mt-3 btn btn-primary" type="submit" id="submit" name="submit" value="Get App User"
                            onClick={submitGetAppUserById}></input>
                    </form>
                </div>
                <div>
                    <p>App user data : {appUser.name} {appUser.email}</p>
                </div>
            </div>
            <div>
                <p>Get all App Users</p>
                <div>
                    <form className="form form-group form-primary">
                        <input className="form-control mt-3 btn btn-primary" type="submit" id="submit" name="submit" value="Get All App Users"
                            onClick={submitGetAllAppUser}></input>
                    </form>
                </div>
                <div>
                    {appUsersList.map((a, k) => {
                        return (
                            <div k={k}> {a.id} {a.name} {a.username} {a.email}</div>
                        );

                    })}
                </div>

            </div>

        </div>
    );

}

export default AppUserComp;

// import axios from "axios";
// import { useState } from "react";

// const AppUserComp = () => {

//     const [appuser, setAppUser] = useState({});
//     const [uid, setUid] = useState('');

//     const handleUidInput = (evt) => {
//         setUid(evt.target.value);
//     }

//     const submitGetAppUserById = (evt) => {
//         console.log('submitGetAppUserById');
//         // axios.get('http://localhost:8082/emp/getempbyid/4')
//         // axios.get('https://jsonplaceholder.typicode.com/users/4')
//         axios.get('https://jsonplaceholder.typicode.com/users/' + uid)
//             .then((response) => {
//                 console.log(response.data);
//             })
//             .catch();
//         evt.preventDefault();
//     }

//     return (
//         <div className="container">
//             <p className="display-4 text-primary">App User Component</p>
//             <div>
//                 <p>AppUser Data: </p>
//             </div>
//             <div className="col-4">
//                 <form className="form form-group form-primary">
//                     <input className="form-control mt-3" type="number" id="uid" name="uid" value={uid}
//                         onChange={handleUidInput} placeholder="Please enter userid"></input>
//                     <input className="form-control mt-3 btn btn-primary" type="submit" id="submit" name="submit" value="Get App User"
//                         onClick={submitGetAppUserById}></input>
//                 </form>
//             </div>
//         </div>
//     );

// }

// export default AppUserComp;