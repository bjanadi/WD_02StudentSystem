import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import LHome from './components/LHome';
import Register from './components/Register';
import Home from './components/home/Home';
import MyProfile from './components/MyProfile';
import ApprovedCourses from "./components/ApprovedCourses";
import MyCourses from "./components/MyCourses";
import UploadAssignment from "./components/UploadAssignment";


function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/login" component={Login} exact/>
                    <Route path="/register" component={Register} exact/>
                    <Route path="/lhome" component={LHome} exact/>
                    <Route path="/myprofile" component={MyProfile} exact/>
                    <Route path="/approvedCourses" component={ApprovedCourses} exact/>
                    <Route path="/myCourses" component={MyCourses} exact/>
                    <Route path="/uploadAssignment" component={UploadAssignment} exact/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
export default App;
