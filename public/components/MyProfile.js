import React,{Component} from 'react';
import LNavigation from './LNavigation';
import LAppNavbar from "./LAppNavbar";
import "../css/myprofile.css";
import icon from "../images/humanicon.png";
import {ListGroupItem} from 'reactstrap';


class MyProfile extends Component{

    render() {
        return (
            <div>
                <LAppNavbar/>
                <div className='container bg-light'>
                    <LNavigation/>
                        <div className="section">
                        <img  className="icon" src={icon} width = "100%"  height="100%" alt="graph" />
                        <ListGroupItem><h3>Boteju W.J.M</h3></ListGroupItem>
                        <ListGroupItem><h3>IT17133678</h3></ListGroupItem>
                            <div className="aside">
                                <h1>Aside</h1>
                            </div>
                        </div>

                </div>
            </div>
        );
    }

}

export default MyProfile;