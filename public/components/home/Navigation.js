import React,{Component} from "react";
import  {NavLink} from "react-router-dom";

class Navigation extends Component {

    render() {
        return (
            <div>
                <ul className="nav nav-tabs nav-justified">
                    <li className="nav-item">
                        <NavLink to="/courseweb" className="nav-link" exact activeStyle={{color:'black'}}>COURSEWEB</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/faculties" className="nav-link" exact activeStyle={{color:'black'}}>Faculties</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/supportservices" className="nav-link" exact activeStyle={{color:'black'}}>Libraries</NavLink>
                    </li>
                    <li>
                        <form>
                            <input type="search" placeholder="  Search a Course"/>
                            <button type="submit" className="btn-primary">Search</button>
                        </form>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navigation;