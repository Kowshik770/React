import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class GetManagerDetails extends Component {
    constructor()
    {
        super();
        this.state={
            Employee:{}
        }
    }
    GetManager(e){
    
        let managerId=localStorage.getItem("managerid");
        
        axios.get("http://localhost:22452/api/Manager/"+managerId)
        .then(response=>{
          this.setState({Employee:response.data})
    
      }).catch(error=>{
          console.warn(error)
      })
      
    }


  render() {
      this.GetManager();
    const {Employee}=this.state;
    return (
      <><div>ShowAllDetails Of Manager</div><div>
            <table className='t' border="1" align='center'>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>DateOfJoin</th>
                <th>Department</th>
                <th>ManagerId</th>
                </tr>
                <tr>
                  
                  <td>{this.state.Employee.employeeid}</td>
                <td>{this.state.Employee.employeeName}</td>
                <td>{this.state.Employee.employeeMobileNumber}</td>
                <td>{this.state.Employee.employeeEmail}</td>
                <td>{this.state.Employee.dateOfjoin}</td>
                <td>{this.state.Employee.department}</td>
                <td>{this.state.Employee.managerId}</td>
                
                </tr>
                
            </table>
            <Link to="/ManagerInbox">DashBoard</Link>
        </div></>
    )
  }
}
