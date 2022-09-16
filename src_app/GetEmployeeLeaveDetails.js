import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class GetEmployeeLeaveDetails extends Component {
    constructor()
    {
        super();
        this.state={
            Leave:{}
        }
    }
    GetLeaveByEmployee(e){
    
        let employeeId=localStorage.getItem("empid");
        
        axios.get("http://localhost:22452/api/Leave/EmployeeId/"+employeeId)
        .then(response=>{
          this.setState({Leave:response.data})
    
      }).catch(error=>{
          console.warn(error)
      })
      
    }


  render() {
      this.GetLeaveByEmployee();
    const {Employee}=this.state;
    return (
      <><div>ShowAllDetails</div><div>
            <table className='t' border="1" align='center'>
                <tr>
                <th>LeaveId</th>
                <th>EmployeeId</th>
                <th>ManagerID</th>
                <th>NumberOfDay</th>
                <th>StartDay</th>
                <th>EndDay</th>
                <th>LeaveType</th>
                <th>Status</th>
                <th>Reason</th>
                <th>AppliedOn</th>
                <th>ManagerComments</th>
                </tr>
                <tr>
                  
                  <td>{this.state.Leave.leaveId}</td>
                <td>{this.state.Leave.employeeId}</td>
                <td>{this.state.Leave.managerId}</td>
                <td>{this.state.Leave.numberOfDay}</td>
                <td>{this.state.Leave.strartDate}</td>
                <td>{this.state.Leave.endDate}</td>
                <td>{this.state.Leave.leaveType}</td>
                <td>{this.state.Leave.status}</td>
                <td>{this.state.Leave.reason}</td>
                <td>{this.state.Leave.appliedOn}</td>
                <td>{this.state.Leave.managerComments}</td>
                </tr>
                
            </table>
            <Link to="/Inbox">DashBoard</Link>
        </div></>
    )
  }
}