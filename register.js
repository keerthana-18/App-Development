import React, { useState } from 'react';
import '../Assets/css/form.css';
import { Link, useNavigate } from 'react-router-dom';

function RegisterForm() {
//   const navigate = useNavigate();
//   const [fields, setFields] = useState({});
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     let fields = { ...fields };
//     fields[e.target.name] = e.target.value;
//     setFields(fields);
//   };

//   const validateForm = () => {
//     let fields = { ...fields };
//     let errors = {};
//     let formIsValid = true;

//     if (!fields['username']) {
//       formIsValid = false;
//       errors['username'] = '*Please enter your username.';
//     }

//     if (typeof fields['username'] !== 'undefined') {
//       if (!fields['username'].match(/^[a-zA-Z ]*$/)) {
//         formIsValid = false;
//         errors['username'] = '*Please enter alphabet characters only.';
//       }
//     }

//     if (!fields['emailid']) {
//       formIsValid = false;
//       errors['emailid'] = '*Please enter your email-ID.';
//     }

//     if (typeof fields['emailid'] !== 'undefined') {
//       // Regular expression for email validation
//       var pattern = new RegExp(
//         /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
//       );
//       if (!pattern.test(fields['emailid'])) {
//         formIsValid = false;
//         errors['emailid'] = '*Please enter valid email-ID.';
//       }
//     }

//     if (!fields['mobileno']) {
//       formIsValid = false;
//       errors['mobileno'] = '*Please enter your mobile no.';
//     }

//     if (typeof fields['mobileno'] !== 'undefined') {
//       if (!fields['mobileno'].match(/^[0-9]{10}$/)) {
//         formIsValid = false;
//         errors['mobileno'] = '*Please enter valid mobile no.';
//       }
//     }

//     if (!fields['password']) {
//       formIsValid = false;
//       errors['password'] = '*Please enter your password.';
//     }

//     if (typeof fields['password'] !== 'undefined') {
//       if (
//         !fields['password'].match(
//           /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
//         )
//       ) {
//         formIsValid = false;
//         errors['password'] = '*Please enter secure and strong password.';
//       }
//     }

//     if (typeof fields['confirmpassword'] !== 'undefined') {
//       if (
//         !fields['confirmpassword'].match(
//           /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
//         )
//       ) {
//         formIsValid = false;
//         errors['confirmpassword'] = '*Please enter your confirm password.';
//       }
//     }

//     if (
//       typeof fields['password'] !== 'undefined' &&
//       typeof fields['confirmpassword'] !== 'undefined'
//     ) {
//       if (fields['password'] !== fields['confirmpassword']) {
//         formIsValid = false;
//         errors['password'] = 'Confirm password is not matched';
//       }
//     }

//     setErrors(errors);
//     return formIsValid;
//   };

//   const submituserRegistrationForm = (e) => {
//     e.preventDefault();
//     console.log(validateForm());

//     if (validateForm()) {
//       console.log(fields);
//       const newFields = {
//         username: '',
//         emailid: '',
//         mobileno: '',
//         password: '',
//         confirmpassword: '',
//       };

//       setFields(newFields);
//       console.log(fields);
//       alert('Form submitted');
//     }
//   };

  return (
    <div id="main-registration-container">
      <div id="register">
        <h3>Register</h3>
        <form
          method="post"
          name="userRegistrationForm"
         
        >
          <label>UserName</label>
          <input
            type="text"
            name="username"
           
          />
          <div className="errorMsg"></div>
          <label>Email ID</label>
          <input
            type="text"
            name="emailid"
            
          />
          <div className="errorMsg"></div>
          <label>Mobile No</label>
          <input
            type="text"
            name="mobileno"
            
          />
          <div className="errorMsg"></div>
          <label>Password</label>
          <input
            type="password"
            name="password"
          
          />
          <div className="errorMsg"></div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
          
          />
          <div className="errorMsg"></div>
          {/* <input type="submit" className="button" value="Register" /> */}
          <Link to = '/'>
          <button className='button'>
            <h4>Register</h4>
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
