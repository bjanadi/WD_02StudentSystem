import React,{Component} from 'react';
import LNavigation from './LNavigation';
import LAppNavbar from "./LAppNavbar";
import {getFromStorage} from "../utils/storage";


class LHome extends Component{

    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            token:'',
            loginError:''
        }
    };
    componentDidMount() {
        const token= getFromStorage('the_main_app');
        if(token){
            //verify token
            fetch('http://localhost:3000/api/students/verify-student?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if(json.success){
                        this.setState({
                            token,
                            isLoading:false
                        });
                    } else{
                        this.setState({
                            isLoading:false
                        });
                    }
                })
        }
        else{
            this.setState({
                isLoading:false,
            })
        }
    }

    render() {
        const {
            isLoading,
            token,
        }=this.state;

        if(isLoading){
            return(<div><p>Loading...</p></div>);
        }
        if(!token)
            return(<div>
                <LAppNavbar/>
                <div className='container bg-light'>
                    <LNavigation/>

                </div>
            </div>);

    }
}

export default LHome;