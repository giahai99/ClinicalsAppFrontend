import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';



class CollectClinicals extends React.Component{
    state = {}
    
    componentWillMount(){
        console.log(this.props.id)
        axios.get("http://localhost:8080/clinicalservices/api/patients/" + this.props.patientId)
        .then(res=>{
            this.setState(res.data)
            console.log(res.data)
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const data={
            patientId: this.props.patientId,
            componentName: this.componentName,
            componentValue: this.componentValue
        }
        axios.post("http://localhost:8080/clinicalservices/api/clinicals/",data)
        .then(res=>{
            toast("Patient Data Saved Successfully", {autoClose:3000, position:toast.POSITION.BOTTOM_CENTER})
        })
    }

    render(){
        return(<div>
            <h2>Patient Details:</h2>
            First Name: {this.state.firstName}
            Last Name: {this.state.lastName}
            Age: {this.state.age}
            <h2>Patient Clinical Data:</h2>
            <form>
                Clinical Entry Type <select onChange={(event)=>{this.componentName=event.target.value}}>
                    <option>Select One</option>
                    <option value="bp">Blood Pressure(Sys/Dys)</option>
                    <option value="hw">Height/Weight</option>
                    <option value="heartrate">Heart Rate</option>
                </select>
                Value:<input type="text" name="componentValue" onChange={(event)=>{this.componentValue=event.target.value}}/>
                <button onClick={this.handleSubmit.bind(this)}>Confirm</button>
            </form>
            <ToastContainer/>
            </div>)
    }
}

export default (props) => <CollectClinicals {...useParams()} {...props} />