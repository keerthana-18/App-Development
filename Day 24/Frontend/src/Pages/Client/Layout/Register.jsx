import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userRegister } from '../../../services/Api';
import Navbar from '../../../Components/Navbar';
import { Footer } from '../../../Components/Footer';
import Login from './Login';
import { NavLink } from 'react-router-dom';
export default function Register() {
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        name: '',
        phone: 0,
        email: '',
        password: '',
        address:'',
        role:'customer'
    });

    const handleChange = (e) => {
        setSignup({ ...signup, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(signup)
        const res = await userRegister(signup);
        if (res.data === "User registered successfully" && res.status==200) {
           
            setTimeout(() => {
                navigate('/login');
            }, 150);

        } 
        // else if (res.data === "Email Already Exists") {
        //     toast.error(`Email Already Exists !`, {
        //         position: "bottom-right",
        //         autoClose: 4000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     });
        // }
         else if (res.data==="Sommething went wrong!" && res.status==="400") {
           console.log("Something went wrong!");
        }
    };


    return (
        <>
            <div className='auth-con'>
               
                <div className='auth-container'>
                    <div className='auth-wrapper'>
                        <form className='auth-form-1 app-x-shadow' onSubmit={handleSubmit}>
                           
                            <input type="text" name="name" id="name" onChange={handleChange} placeholder='Name' className='auth-field' required />
                            <input type="number" name="phone" id="phone" onChange={handleChange} placeholder='Phone' className='auth-field' required />
                            <input type="email" name="email" id="email" onChange={handleChange} placeholder='Email' className='auth-field' required />
                            <input type="password" name="password" id="password" onChange={handleChange} placeholder='Password' className='auth-field' required />
                            <textarea name="address" id="address" cols="45" rows="5" placeholder='Address' onChange={handleChange} className='auth-field' required/>
                            <button type='submit' className='auth-btn app-x-shadow'> Register </button>
                        </form>
                        <Link to='/login' className='auth-links'>Login</Link>
                        
                    </div>
                </div>
            </div>
           
        </>
    )
}