import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EmployeeUpdate = () => {
    //!Dynamically getting the employee id to update the details
  const { empid } = useParams();

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  //!First loading all the data from api using the axios get method
  useEffect(() => {
    axios.get(`http://localhost:8000/Employee/${empid}`).then((res) => {
      setFirstName(res.data.FirstName);
      setLastName(res.data.LastName);
      setEmail(res.data.Email);
      setPhone(res.data.PhoneNumber);
    });
  }, []);

  //!Updating the employee based on id from api using the axios put method

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/Employee/${empid}`, {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        PhoneNumber: phone,
      })
      .then((response) => {
        alert('Data Updated Successfully');
        navigate('/');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="">
      <div className="flex justify-center my-6">
        <h1 className="font-bold text-4xl my-5">Employee Update </h1>
      </div>
      <div className="create-container flex justify-center w-full items-center mt-4">
        <form className="" onSubmit={handleSubmit}>
          <div className="">
            <label className="">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
              className="block w-full py-1 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 "
            />
          </div>

          <div className="">
            <label className="">Last Name</label>
            <input
              className="block w-full py-1 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
          </div>

          <div className="">
            <label className="">Email address</label>
            <input
              className="block w-full py-1 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
              value={email}
              disabled="disabled"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="">
            <label className="">Phone Number</label>
            <input
              className="block w-full py-1 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              required
            />
          </div>

          <div className="">
            <button
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-3 focus:outline-none "
              type="submit"
            >
              Update
            </button>
            <Link
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2  focus:outline-none cursor-pointer"
              to="/"
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeUpdate;
