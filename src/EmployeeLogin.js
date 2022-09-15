import axios from 'axios';
import React, { Component } from 'react';

import Inbox from './Inbox'
import './App.css'

export default class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         empid:Number,
         password:'',
         
      }
      this.handlechange=this.handlechange.bind(this);
      this.Login=this.Login.bind(this);
    }
    handlechange(e){
        this.setState(e);
    }

Login(){
        console.log(this.state.empid);
        console.log(this.state.password);
        axios.get("http://localhost:22452/api/Employee/Login/"+this.state.empid+ '/'+this.state.password).
        then(res=>res).then(
            result=>{
                console.log(result.data)
                let r=result.data;
                console.log(r)
                localStorage.setItem("empid",result.data.employeeid);
                localStorage.setItem("empname",result.data.employeeName);
                if(r!=null){
                    alert("welcome "+ result.data.employeeName);
                    window.location="/Inbox"
                    
                }else{
                    alert("invalid credentials");
                }
                //window.sessionStorage.setItem("empid",result.data.employeeid);
            }).catch(err=>{
                alert(err);

            });
    }


    
  render() {
    return (
        <>
        <div className='container'>
      <h1 className="heading">Login</h1>
      <div className='form-group' >
      <label>Username</label>
      <input type='text' className='form-control' onChange={(e)=> this.handlechange({empid:e.target.value})} placeholder='enter empId' required /><br/>
      </div>
      <div className='form-group' >
      <label>password</label>
      <input type='password' className='form-control' onChange={(e)=> this.handlechange({password:e.target.value})} placeholder='enter password' required />
      <br/></div>
      <button className='btn btn-outline-primary' onClick={this.Login} >Login</button>
      </div>
      </>

    )
  }
}