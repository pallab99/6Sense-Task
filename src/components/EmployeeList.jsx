import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EmployeeList = () => {
  const navigate = useNavigate();
  const loadDetails = (id) => {
    navigate('/employee/detail/' + id);
  };

  const deleteFunc = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      axios.delete(`http://localhost:8000/Employee/${id}`).then((res) => {
        alert('Removed Successfully');
        window.location.reload();
      });
    }
  };

  const [employee, setEmployee] = useState(null);
  useEffect(() => {
    const IsCancled = false;
    axios.get('http://localhost:8000/Employee').then((res) => {
      if (!IsCancled) {
        console.log(res.data);
        setEmployee(res.data);
      }
      return () => {
        IsCancled = true;
      };
    });
  }, []);

  return (
    <div className="">
      <div className="card">
        <div className="card-title">
          <h2 className="text-5xl text-center my-4">Employee List</h2>
        </div>
        <div className="mb-3">
          <Link className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none' to="employee/create">Add New (+)</Link>
        </div>
        <div className="card-body">
          <table className="w-full text-lg text-center text-gray-500 dark:text-gray-400 space-y-4">
            <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="text-white font-bold">
                <td className="">Full Name</td>
                {/* <td className="">Last Name</td>
                <td className="">Email</td>
                <td className="">Phone Number</td> */}
                <td className="">Action</td>
              </tr>
            </thead>
            <tbody className="m-3 space-x-5 text-black ">
              {employee &&
                employee.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        {item.FirstName} {item.LastName}
                      </td>
                      {/* <td>{item.LastName}</td>
                      <td>{item.Email}</td>
                      <td>{item.PhoneNumber}</td> */}
                      <td className="space-x-2 space-y-5" >
                        <a
                          onClick={() => {
                            loadDetails(item.id);
                          }}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-light rounded-xl text-sm px-2 py-1 mr-2  focus:outline-none mb-4 cursor-pointer"
                        >
                          Details
                        </a>
                        <a className="">Block</a>
                        <a
                          onClick={() => {
                            deleteFunc(item.id);
                          }}
                          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-light rounded-xl text-sm px-2 py-1 mr-2  focus:outline-none mb-4 cursor-pointer ml-2"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
