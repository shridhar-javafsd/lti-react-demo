import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Emp from './components/Emp';
import AppUserComp from './components/AppUserComp';
import Dept from './components/Dept';
import Footer from './components/Footer';
import MyMedia from './components/MyMedia';
import Home from "./components/Home";

const Routes = () => {

    return (
        <div>
            <div>
                <Router>
                    <div>
                        <Header />
                        <div>
                            <Switch>
                                <Route path="/home" > <Home /> </Route>
                                <Route path="/dept" > <Dept /> </Route>
                                <Route path="/emp" > <Emp /> </Route>
                                <Route path="/appuser" > <AppUserComp /> </Route>
                                <Route path="/media" > <MyMedia /> </Route>
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </div>
        </div>
    );

}

export default Routes;
