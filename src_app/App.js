import logo from './logo.svg';
import './App.css';
import Home from'./Home.js'
import EmployeeLogin from './EmployeeLogin';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import ManagerLogin from './ManagerLogin';
import Inbox from './Inbox'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'
import ManagerInbox from './ManagerInbox'
import GetManagerDetails from './GetManagerDetails'
import UpdateEmployeeDetails from'./UpdateEmployeeDetails'
import GetEmployeeLeaveDetails from'./GetEmployeeLeaveDetails'
import GetEmployeeDetails from './GetEmployeeDetails';
import ApplyNewLeaveForEmployee from './ApplyNewLeaveForEmployee';
function App() {
  return (

	<div>
		<center>
			<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
        <Route path='/EmployeeLogin' element={<EmployeeLogin />}></Route>
        <Route path='/Inbox' element={<Inbox />}></Route>
		<Route path='/GetEmployeeDetails'element={<GetEmployeeDetails />}></Route>
		<Route path='/GetEmployeeLeaveDetails' element={<GetEmployeeLeaveDetails />}></Route>
		<Route path='/ApplyNewLeaveForEmployee' element={<ApplyNewLeaveForEmployee />}></Route>
		<Route path="/UpdateEmployeeDetails" element={<UpdateEmployeeDetails />}></Route>
		<Route path="/ManagerLogin" element={<ManagerLogin/>}></Route>
		<Route path="/ManagerInbox" element={<ManagerInbox/>}></Route>
		<Route path="/GetManagerDetails" element={<GetManagerDetails/>}></Route>
			</Routes>
			</BrowserRouter>
		</center>
	</div>
	
  );
}

export default App;