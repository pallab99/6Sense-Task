import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EmployeeDetails = () => {
  const { empid } = useParams();
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/Employee/${empid}`).then((res) => {
      setEmployee(res.data);
    }).catch((err) => {
      console.log(err.message);
    });
  }, []);

  const navigate = useNavigate();
  const loadUpdate = (id) => {
    navigate('/employee/update/' + id);
  };

  return (
    <div className="grid justify-center my-14">
      <h1 className="font-bold text-4xl my-5">Employee Details </h1>
      {employee && (
        <div className="grid justify-center text-3xl my-2">
          <h2 className="my-2">
            Full name is : {employee.FirstName} {employee.LastName}
          </h2>
          <h2 className="my-2">Email is : {employee.Email}</h2>
          <h2 className="my-2">Phone Number is : {employee.PhoneNumber}</h2>
          <h2 className="my-2">Employee Status is : {employee.status}</h2>
          <div className="flex my-7 justify-end">
            <Link
              to="/"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300  rounded-xl text-sm px-2 py-1  focus:outline-none cursor-pointer w-fit font-normal "
            >
              Back To Employee List
            </Link>
            <a
              onClick={() => {
                loadUpdate(employee.id);
              }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-normal rounded-xl text-sm px-2 py-1  focus:outline-none cursor-pointer w-20 h-8 text-center ml-6"
            >
              Update
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetails;
