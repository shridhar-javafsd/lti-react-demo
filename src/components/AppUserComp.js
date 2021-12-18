import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAppUserById } from '../redux/AppUserSlice';

const AppUserComp = () => {

    const [uid, setUid] = useState('');

    const appUserDataFromStore = useSelector((state) => state.appUser.appUserState);

    const dispatch = useDispatch();

    const handleUidInput = (evt) => {
        setUid(evt.target.value);
    }

    const submitGetAppUserById = (evt) => {
        console.log('submitGetAppUserById');
        axios.get(`https://jsonplaceholder.typicode.com/users/${uid}`)
            .then((response) => {
                console.log('submitGetAppUserById');
                dispatch(getAppUserById(response.data));
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
                    <p>App user data : {appUserDataFromStore.name} {appUserDataFromStore.email}</p>
                </div>
            </div>
        </div>
    );

}

export default AppUserComp;




// import axios from "axios";
// import { useState } from "react";

// const AppUserComp = () => {

//     // assigmnent -  write code to update and delete appUsers 

//     const [appUser, setAppUser] = useState({});
//     const [appUsersList, setAppUsersList] = useState([]);
//     const [appUserToAdd, setAppUserToAdd] = useState({});

//     const [uid, setUid] = useState('');

//     const handleUidInput = (evt) => {
//         setUid(evt.target.value);
//     }

//     const submitGetAppUserById = (evt) => {
//         console.log('submitGetAppUserById');
//         // axios.get('https://jsonplaceholder.typicode.com/users/' + uid)
//         axios.get(`https://jsonplaceholder.typicode.com/users/${uid}`)
//             .then((response) => {
//                 setAppUser(response.data);
//                 console.log(appUser);
//             })
//             .catch((error) => {
//                 console.log(error.message);
//             });
//         evt.preventDefault();
//     }

//     const submitGetAllAppUser = (evt) => {
//         console.log('submitGetAllAppUser');
//         axios.get(`https://jsonplaceholder.typicode.com/users/`)
//             .then((response) => {
//                 setAppUsersList(response.data);
//                 console.log(appUsersList);
//             })
//             .catch((error) => {
//                 console.log(error.message);
//             });
//         evt.preventDefault();
//     }

//     const submitAddAppUser = (evt) => {
//         console.log('submitAddAppUser');
//         axios.post(`https://jsonplaceholder.typicode.com/users/`, appUserToAdd)
//             .then((response) => {
//                 console.log(response.data);
//                 alert(`User added successfully. ${response.data}`);
//                 // alert('User added successfully.' + response.data);
//             })
//             .catch((error) => {
//                 console.log(error.message);
//                 alert(`User could not be added ${error.message}`);
//             });
//         evt.preventDefault();
//     }

//     const handleAddAppUserChange = (evt) => {
//         console.log('handleAddAppUserChange');
//         setAppUserToAdd({
//             ...appUserToAdd,
//             [evt.target.name]: evt.target.value
//         });
//     }

//     return (
//         <div className="container">
//             <p className="display-4 text-primary">App User Component</p>
//             <div>
//                 <div>
//                     <p>get App User by id: </p>
//                 </div>
//                 <div className="col-4">
//                     <form className="form form-group form-primary">
//                         <input className="form-control mt-3" type="number" id="uid" name="uid" value={uid}
//                             onChange={handleUidInput} placeholder="Please enter userid"></input>
//                         <input className="form-control mt-3 btn btn-primary" type="submit" id="submit" name="submit" value="Get App User"
//                             onClick={submitGetAppUserById}></input>
//                     </form>
//                 </div>
//                 <div>
//                     <p>App user data : {appUser.name} {appUser.email}</p>
//                 </div>
//             </div>
//             <div>
//                 <p>Get all App Users</p>
//                 <div className="col-4">
//                     <form className="form form-group form-primary">
//                         <input className="form-control mt-3 btn btn-primary" type="submit" id="submit" name="submit" value="Get All App Users"
//                             onClick={submitGetAllAppUser}></input>
//                     </form>
//                 </div>
//                 <div>
//                     {appUsersList.map((appUser, key) => {
//                         return (<div key={key}> {appUser.email} {appUser.username} </div>);
//                     })}
//                 </div>
//             </div>
//             <div className="border border-primary">
//                 <div className="col-4">
//                     <form className="form form-group form-primary">
//                         <input className="form-control mt-3" type="text" id="username" name="username" value={appUserToAdd.username}
//                             onChange={handleAddAppUserChange} placeholder="Please enter username"></input>
//                         <input className="form-control mt-3" type="email" id="email" name="email" value={appUserToAdd.email}
//                             onChange={handleAddAppUserChange} placeholder="Please enter email"></input>
//                         <input className="form-control mt-3" type="number" id="phone" name="phone" value={appUserToAdd.phone}
//                             onChange={handleAddAppUserChange} placeholder="Please enter phone"></input>
//                         <input className="form-control mt-3" type="url" id="website" name="website" value={appUserToAdd.website}
//                             onChange={handleAddAppUserChange} placeholder="Please enter website"></input>
//                         <input className="form-control mt-3 btn btn-primary" type="submit" id="submit" name="submit" value="Add App User"
//                             onClick={submitAddAppUser}></input>
//                     </form>
//                 </div>


//             </div>
//         </div>
//     );

// }

// export default AppUserComp;






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