import EmployeeList from './components/EmployeeList';
import Employeecreate from './components/EmployeeCreate';
import EmployeeDetails from './components/EmployeeDetails';
import EmployeeUpdate from './components/EmployeeUpdate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employee/create" element={<Employeecreate />}></Route>
          <Route
            path="/employee/detail/:empid"
            element={<EmployeeDetails />}
          ></Route>
          <Route
            path="/employee/update/:empid"
            element={<EmployeeUpdate />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
