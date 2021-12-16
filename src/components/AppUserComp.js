
import axios from "axios";
import { useState } from "react";

const AppUserComp = () => {

    const [appuser, setAppUser] = useState({});
    const [uid, setUid] = useState('');

    const handleUidInput = (evt) => {
        setUid(evt.target.value);
    }

    const submitGetAppUserById = (evt) => {
        console.log('submitGetAppUserById');
        // axios.get('http://localhost:8082/emp/getempbyid/4')
        // axios.get('https://jsonplaceholder.typicode.com/users/4')
        axios.get('https://jsonplaceholder.typicode.com/users/' + uid)
            .then((response) => {
                console.log(response.data);
            })
            .catch();
        evt.preventDefault();
    }

    return (
        <div className="container">
            <p className="display-4 text-primary">App User Component</p>
            <div>
                <p>AppUser Data: </p>
            </div>
            <div className="col-4">
                <form className="form form-group form-primary">
                    <input className="form-control mt-3" type="number" id="uid" name="uid" value={uid}
                        onChange={handleUidInput} placeholder="Please enter userid"></input>
                    <input className="form-control mt-3 btn btn-primary" type="submit" id="submit" name="submit" value="Get App User"
                        onClick={submitGetAppUserById}></input>
                </form>
            </div>
        </div>
    );

}

export default AppUserComp;