import React, { useState } from 'react';
import '../Assets/css/form.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
 /* const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    if (!fields['emailid']) {
      formIsValid = false;
      newErrors['emailid'] = '*Please enter your email-ID.';
    } else {
      const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields['emailid'])) {
        formIsValid = false;
        newErrors['emailid'] = '*Please enter a valid email-ID.';
      }
    }

    if (!fields['password']) {
      formIsValid = false;
      newErrors['password'] = '*Please enter your password.';
    } else if (
      !fields['password'].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)
    ) {
      formIsValid = false;
      newErrors['password'] = '*Please enter a secure and strong password.';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const submituserRegistrationForm = (e) => {
    e.preventDefault();
    console.log(validateForm());

    if (validateForm()) {
      console.log(fields);
      const newFields = {
        emailid: '',
        password: '',
      };

      setFields(newFields);
      console.log(fields);

      // Perform any navigation logic here if needed
    }
  };
*/
  return (
    <div id="main-registration-container">
      <div id="register">
        <h3>Login</h3>
        <form method="post" name="userRegistrationForm" >
        <div className="errorMsg"></div>
          <label>Email ID</label>
          <input
            type="text"
            name="emailid"
            
            
          />
       
       <div className="errorMsg"></div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            
          />
          <div className="errorMsg"></div>
          <button className='button'><h4>Login</h4></button>
          <div className="errorMsg"></div>
          
          <p>Don't have an account register</p>
          {/* <input type="submit" className="button" value="Register" /> */}
          <Link to = '/signup'>
          <button className='button'>
            <h4>Register</h4>
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;