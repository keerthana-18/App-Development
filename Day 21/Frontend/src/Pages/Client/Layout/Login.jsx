import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin, getUserbyId } from '../../../services/Api';

import { v4 as xuidkey } from 'uuid';
import '../../../Assets/css/login.css'
export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('Token'));
    const navigate = useNavigate();
    const [signin, setSignin] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setSignin({ ...signin, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await userLogin(signin);

        if ((res.status) == "200" && (res.data.role)== "CUSTOMER")  {
            console.log(res.data);
            

            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Role', res.data.role);
   

            const getuid = (res.data.uid);
            console.log(getuid)
            localStorage.setItem('xuserName', res.data.name);
            localStorage.setItem('xuserEmail', res.data.email);
            localStorage.setItem('xuserId', res.data.uid);
            localStorage.setItem('xuserPhone', res.data.phone);
            localStorage.setItem('xuserAddress', res.data.address);

           
            setTimeout(() => {
                navigate('/');
            }, 150);

        }
        
        else if((res.status) == "200" && (res.data.role)== "ADMIN"){
            console.log(res.data);

            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Role', res.data.role);
            localStorage.setItem('AdminEmail', res.data.email);

            setTimeout(() => {
                navigate('/dashboard');
            }, 1500);
        }
        
        else {
            console.log("Wrong email or password");
        } 
    };


    return (
        <>
            <div className='auth-con'>
                
                <div className='auth-container'>
                    <div className='auth-wrapper'>
                        <form className='auth-form app-x-shadow' onSubmit={handleSubmit}>
                            {/* <h1 className='auth-heading'>Login</h1> */}
                            <input type="email" name="email" id="email" onChange={handleChange} placeholder='Email' className='auth-field' required />
                            <input type="password" name="password" id="password" onChange={handleChange} placeholder='Password' className='auth-field' required />

                            <button type='submit' className='auth-btn app-x-shadow'> Login </button>
                        </form>
                        <Link to='/register' className='auth-links'>Register</Link>
                    </div>
                </div>
               
            </div>
           
        </>
    )
}