import React,{Component} from 'react';
import {Button, Label, Input} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import icon from "../images/humanicon.png";
import AppNavbar from "./home/AppNavbar";
import {getFromStorage, setInStorage} from "../utils/storage";

class Login extends Component{
    constructor(props){
        super(props);
        this.state= {
            isLoading: true,
            token: '',
            loginError: '',
            loginEmail: '',
            loginPassword: '',
        };

            this.onTextBoxChangeLoginEmail= this.onTextBoxChangeLoginEmail.bind(this);
            this.onTextBoxChangeLoginPassword= this.onTextBoxChangeLoginPassword.bind(this);
            this.onLogin= this.onLogin.bind(this);
    };

    onTextBoxChangeLoginEmail(event){
        this.setState({
            loginEmail:event.target.value,
        });
    }
    onTextBoxChangeLoginPassword(event){
        this.setState({
            loginPassword:event.target.value,
        });
    }
    onLogin(){
        //grab state
        const{
            loginEmail,
            loginPassword
        }=this.state;

        this.setState({
            isLoading:true,
            sessionStorage.setItem("StudentID":)
        });

        //post request to backend
        fetch('http://localhost:3000/api/students/login-student',
            {method:'POST',
                headers:{
                'Content-Type': 'application/json'
                },
            body:JSON.stringify({
                email:loginEmail,
                password:loginPassword
            }),
            }).then(res => res.json())
            .then(json => {
                if(json.success){
                    setInStorage('the_main_app',{token: json.token});
                    this.setState({
                        loginError:json.message,
                        isLoading:false,
                        loginPassword:'',
                        loginEmail:'',
                        token:json.token
                    });
                    alert("Login Successful");
                }
                else{
                    alert("Incorrect Email or Password")
                }
            });
         this.props.history.push(`/lhome`);

    };
    componentDidMount() {
        const obj= getFromStorage('the_main_app');

        if(obj && obj.token){
            const {token}=obj.token;

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
    };
    render() {
        const {
            isLoading,
            token,
            loginEmail,
            loginError,
            loginPassword
        }=this.state;

        return (
            <div>
            <AppNavbar/>
            <div className='container bg-light'>
                <div className='row'>
                    <div className='card' style={{margin: 'auto'}}>
                        <div className='card-header'>
                            <h1 className='modal-header'>LOGIN</h1>
                        </div>
                        <div className='card-body'>
                            <img src={icon} width = "80%"  height="60%" alt="graph" />
                            <br/><br/>
                            <form onSubmit={value => this.handleOnSubmit(value)}>
                                <Label htmlFor="email">Email: </Label>
                                <Input
                                    type="text"
                                    className='form-control'
                                    name='email'
                                    id='email'
                                    value={loginEmail}
                                    onChange={this.onTextBoxChangeLoginEmail}
                                    required/>
                                <Label htmlFor="password">Password: </Label>
                                <Input
                                    type="password"
                                    className='form-control'
                                    name='password'
                                    id='password'
                                    value={loginPassword}
                                    onChange={this.onTextBoxChangeLoginPassword}
                                    required
                                />
                                {/*<NavLink to="/lhome">*/}
                                <Button type='submit' color="dark" className="btn btn-block" onClick={this.onLogin}>Login</Button>
                                {/*</NavLink>*/}
                                <br/><br/>
                                <NavLink to="/register">
                                    New User?
                                </NavLink>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        );
    }
}
export default Login;