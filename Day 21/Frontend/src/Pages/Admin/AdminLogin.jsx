import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../../Assets/css/login.css';

function AdminLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value }); // Use e.target.name to dynamically update the state
  };

  const submitHandler = (e) => {
    e.preventDefault(); // Invoke the function to prevent form submission

    // Dispatch the login action with the form data
   

    // Navigate to '/Dashboard' on successful login (you might want to add a check for successful login)
    navigate('/dashboard');
  };

  return (
    <>
      <div className='auth-container'>
        <div className='auth-wrapper'>
          <form className='auth-form app-x-shadow' onSubmit={submitHandler}>
            <h1 className='auth-heading'>Login </h1>
            <input type="text" name="username" value={formdata.username} onChange={handleChange} placeholder='username' className='auth-field' required />
            <input type="password" name="password" value={formdata.password} onChange={handleChange} placeholder='password' className='auth-field' required />
            <button type='submit' className='auth-btn app-x-shadow'>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;