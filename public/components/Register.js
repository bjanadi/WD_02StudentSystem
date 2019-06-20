import React,{Component} from 'react';
import {Label, Input,Button} from 'reactstrap';
import icon from "../images/humanicon.png";
import AppNavbar from "./home/AppNavbar";
import {NavLink} from "react-router-dom";

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            email: '',
            itnumber: '',
            phone: ''
        }
    };
    //handle Submit
    handleSubmit(e) {

        const student = {
            "name": e.student.name,
            "password": e.student.password,
            "email": e.student.email,
            "itnumber":e.student.itnumber,
            "phone": e.student.phone
        };
        alert(student.name + ", " + student.password + ", " + student.email + ", " + student.itnumber + ", " + student.phone);

        fetch('http://localhost:3000/api/students/register-student', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        });
    }

    //handle On Submit
    handleOnSubmit(e) {
        e.preventDefault();

        const student_details = {
            name: document.getElementById('name').value,
            password: document.getElementById('password').value,
            email: document.getElementById('email').value,
            itnumber: document.getElementById('itnumber').value,
            phone: document.getElementById('phone').value
        };

        this.handleSubmit({student: student_details});
        this.props.history.push(`/login`);
    }

    render() {
        return (
            <div>
                <AppNavbar/>
            <div className='container bg-light'>
                <div className='row'>
                    <div className='card' style={{margin: 'auto'}}>
                        <div className='card-header'>
                            <h1 className='modal-header'>REGISTER</h1>
                        </div>
                        <div className='card-body'>
                            <img src={icon} width = "50%"  height="50%" alt="graph" />
                            <form onSubmit={value => this.handleOnSubmit(value)}>
                                <Label htmlFor="name">Name: </Label>
                                <Input type="text" className='form-control' name='name' id='name' required/>
                                <Label htmlFor="password">Password: </Label>
                                <Input type="password" className='form-control' name='password' id='password' required/>
                                <Label htmlFor="email">Email: </Label>
                                <Input type="email" className='form-control' name='email' id='email' required/>
                                <Label htmlFor="itnumber">IT Number: </Label>
                                <Input type="text" className='form-control' name='itnumber' id='itnumber' required/>
                                <Label htmlFor="phone">Phone: </Label>
                                <Input type="text" className='form-control' name='phone' id='phone' required/>
                                <div className='form-group'>
                                    <Button type='submit' color="dark" className="btn btn-block">Register</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Register;