import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmployeeCreate = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  //!Axios post method to create a new employee details
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/Employee', {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        PhoneNumber: phone,
        status: status,
      })
      .then((response) => {
        alert('Data Saved Successfully');
        navigate('/');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="create-container flex justify-center w-full items-center mt-10">
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
          {firstName.length == 0 && (
            <span className="text-red-500">Enter the First Name</span>
          )}
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
          {lastName.length == 0 && (
            <span className="text-red-500">Enter the Last Name</span>
          )}
        </div>

        <div className="">
          <label className="">Email address</label>
          <input
            className="block w-full py-1 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          {email.length == 0 && (
            <span className="text-red-500">Enter the Email </span>
          )}
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
          {phone.length == 0 && (
            <span className="text-red-500">Enter the Phone Number</span>
          )}
        </div>

        <div className="">
          <label className="">Status</label>
          <input
            className="block w-full py-1 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            required
          />
          {status.length == 0 && (
            <span className="text-red-500">Enter the status</span>
          )}
        </div>

        <div className="">
          <button
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-3 focus:outline-none "
            type="submit"
          >
            Save
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
  );
};

export default EmployeeCreate;
