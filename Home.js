import React,{Component} from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
class Home extends Component {
render() {
	
	return (
	<div>
		{}<center><h1>Welcome to Leave Management System</h1></center>
		<center><h1><Link to="/EmployeeLogin">EmployeeLogin</Link></h1></center>
		<h1><Link to="/ManagerLogin">ManagerLogin</Link></h1>
	</div>
	)
}
}

export default Home;
