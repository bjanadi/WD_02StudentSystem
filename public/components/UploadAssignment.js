import React,{Component} from 'react';
import {Label, Input,Button} from 'reactstrap';
import LAppNavbar from "./LAppNavbar";
import LNavigation from "./LNavigation";
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


class UploadAssignment extends Component{
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            assignmentId: '',
            studentId: '',
            upload:'',

        }
    };
    //handleInit in filepond
    handleInit() {
        console.log('FilePond instance has initialised', this.pond);
    }

    //handle Submit
    handleSubmit(e) {

        const upload = {
            "courseId": e.upload.courseId,
            "assignmentId": e.upload.assignmentId,
            "studentId": e.upload.studentId,
            "upload":e.upload.upload
        };
        alert(upload.courseId + ", " + upload.assignmentId + ", " + upload.studentId);

        fetch('http://localhost:3000/api/students/upload-assignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(upload)
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        });
    }

    //handle On Submit
    handleOnSubmit(e) {
        e.preventDefault();

        const upload_details = {
            courseId: document.getElementById('courseId').value,
            assignmentId: document.getElementById('assignmentId').value,
            studentId: document.getElementById('studentId').value,
            upload: document.getElementById('upload').value,
        };
        this.handleSubmit({upload: upload_details});
    }

    render() {
        return (
            <div>
                <LAppNavbar/>
                <div className='container bg-light'>
                    <LNavigation/>

                    <div className='row'>
                        <div className='card' style={{margin: 'auto'}}>
                            <div className='card-header'>
                                <h1 className='modal-header'>UPLOAD YOUR ASSIGNMENT</h1>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={value => this.handleOnSubmit(value)}>
                                    <Label htmlFor="courseId">Course ID: </Label>
                                    <Input type="text" className='form-control' name='courseId' id='courseId' required/>
                                    <Label htmlFor="assignmentId">Assignment Id: </Label>
                                    <Input type="text" className='form-control' name='assignmentId' id='assignmentId' required/>
                                    <Label htmlFor="studentId">Student ID: </Label>
                                    <Input type="text" className='form-control' name='studentId' id='studentId' required/>
                                    <Label htmlFor="upload">Upload: </Label>
                                    <Input type="file" className='form-control' name="upload" id="upload" required/>
                                    <div className='form-group'>
                                        <Button type='submit' color="dark" className="btn btn-block">Submit Assignment</Button>
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
export default UploadAssignment;