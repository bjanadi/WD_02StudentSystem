import React,{Component} from 'react';
import Navigation from './Navigation';
import AppNavbar from "./AppNavbar";

class Home extends Component{

    render() {
            return(
                <div>
                <AppNavbar/>
                <div className='container bg-light'>
                    <Navigation/>
                </div>
                </div>
            );
    }
}
export default Home;