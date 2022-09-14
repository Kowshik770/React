import{BrowserRouter,Routes,Route, json} from 'react-router-dom'
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
function EmployeeLogin (){
    const [email,setEmail]=React.useState('');
    const[Password,setPassword]=React.useState('');
    const handleLogin=async()=>{
        let result=await fetch("",{
            method:'post',
            body:JSON.stringify({email,Password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json();
        console.warn(result)
        if(result.name)
        {
            localStorage.setItem('user',json.stringify(result))
        }
        else{
            alert("please connect the correct details")
        }
    }
	
	return (
	<div className='Login'>
        <center><h1>Login</h1></center>
        <input type="text" className='inputBox' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email}></input>
        <input type="Password" className='inputBox' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} value={Password}></input>
        <button onClick={handleLogin} className='appButton' type='button'>Login</button>
    
		<h1><Link to="/">Back To Home</Link></h1>
	</div>
	)

}

export default EmployeeLogin;
