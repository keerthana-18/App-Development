import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/css/Footer.css';
export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer1'>
            <div className='footer-l'>
                Copyright 2023 
            </div>
            <div className='footer-content'>
                <Link to='/privacypolicy'>Privacy Policy</Link>
                <Link to='/termsandconditions'>Terms & Conditions</Link>
                <Link to='/faq'>FAQ</Link>
                <Link to='/admin/login'>Admin</Link>
                <Link to='/feedback' className='feedback-link'>Feedback</Link>
            </div>
        </div>

    </div>
  )
}