import { useState } from "react";

const AppUserComp = () => {

    const [appuser, setAppUser] = useState({});
    const [uid, setUid] = useState(0);

    const submitGetAppUserById = (evt) => {
        console.log('submitGetAppUserById');
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
                        onChange={setUid} placeholder="Please enter userid"></input>
                    <input className="form-control mt-3 btn btn-primary" type="submit" id="submit" name="submit" value="Add Employee"
                        onClick={submitGetAppUserById}></input>
                </form>
            </div>
        </div>
    );

}

export default AppUserComp;