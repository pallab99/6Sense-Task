import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EmployeeDetails = () => {
  const { empid } = useParams();
  console.log(empid);
  const [employee, setEmployee] = useState([]);
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:8000/Employee/', { params: { id: empid } })
      .then((res) => {
        console.log('Data ', res.data);
        setEmployee(res.data);
        console.log('Employee ', employee);
      });
  }, []);
  // useEffect(() => {
  //     fetch("http://localhost:8000/Employee/" + empid).then((res) => {
  //         return res.json();
  //     }).then((resp) => {
  //         empdatachange(resp);
  //         console.log(empdata)
  //     }).catch((err) => {
  //         console.log(err.message);
  //     })
  // }, []);

  return (
    <div>
      {/* <h1>Employee Details </h1>
      {employee && <p className="">First name is : {employee.FirstName}</p>} */}
    </div>
  );
};

export default EmployeeDetails;
