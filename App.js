import logo from './logo.svg';
import './App.css';
import Home from'./Home.js'
import EmployeeLogin from './EmployeeLogin';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import ManagerLogin from './ManagerLogin';
function App() {
  return (
    <div>
		<center>
			<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
        <Route path='/EmployeeLogin' element={<EmployeeLogin />}></Route>
        <Route path='/ManagerLogin' element={<ManagerLogin />}></Route>
			</Routes>
			</BrowserRouter>
		</center>
	</div>
  );
}

export default App;
