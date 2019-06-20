import React,{Component} from "react";
import  {NavLink} from "react-router-dom";

class LNavigation extends Component {

    render() {
        return (
            <div>
                <ul className="nav nav-tabs nav-justified">
                    <li className="nav-item">
                        <NavLink to="/courseweb" className="nav-link" exact activeStyle={{color:'black'}}>COURSEWEB</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/approvedCourses" className="nav-link" exact activeStyle={{color:'black'}}>Courses</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/myprofile" className="nav-link" exact activeStyle={{color:'black'}}>My Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/mycourses" className="nav-link" exact activeStyle={{color:'black'}}>My Courses</NavLink>
                    </li>

                        <form>
                            <input type="search" placeholder="  Search a Course"/>
                            <button type="submit" className="btn-primary">Search</button>
                        </form>
                </ul>
            </div>
        );
    }
}

export default LNavigation;