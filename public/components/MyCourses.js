import React,{Component} from 'react';
import{Container,ListGroup,ListGroupItem} from "reactstrap";
import LAppNavbar from "./LHome";

class MyCourses extends Component{
    constructor(props){
        super(props);
        this.state = {
            myCourses:[]
        }
    }

    onSubmit() {
        alert("Are you sure?");
    }
    componentDidMount() {
        fetch('http://localhost:3000/api/students/studentcourses?studentId=' + studentId)
            .then( res => {
                return res.json();
            })
            .then(json => {
                console.log(json);
                this.setState({
                    myCourses:json
                })
            })
    }
    render(){
        return(
            <div>
                <LAppNavbar/>
                <Container>
                    <ListGroup>
                        {this.state.myCourses.map( courses => (
                            <ListGroupItem key={courses._id}>
                                <h2>{courses.name}</h2>
                                <h6>Code - {courses.code}</h6>
                                <button type="submit" onClick={this.onSubmit}>View {courses.name}</button>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Container>
            </div>

        );
    }
}
export default MyCourses;