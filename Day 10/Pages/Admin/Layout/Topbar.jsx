/*
import React from 'react';
import { NavLink } from 'react-router-dom';
import {  FaBell } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { CgProfile  } from 'react-icons/cg';
import {  AiOutlineShoppingCart } from 'react-icons/ai';
import '../Assets/css/Topbar.css';
const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-icons">
        <NavLink exact to="/wishlist" activeClassName="active">
          <div className="top-bar-icon">
            <FcLike />
          </div>
        </NavLink>
        <NavLink to="/cart" activeClassName="active">
          <div className="top-bar-icon">
            <AiOutlineShoppingCart />
          </div>
        </NavLink>
        <NavLink to="/profile" activeClassName="active">
          <div className="top-bar-icon">
            <CgProfile />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default TopBar;
*/
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import '../Assets/css/Topbar.css';
import { useSelector } from 'react-redux'
import { selectUser } from '../../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/userSlice';
const TopBar = () => {
  const dispatch= useDispatch();
  const navigate=useNavigate();
  const user=useSelector(selectUser)
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Handle search logic here using the searchTerm state
    console.log('Searching for:', searchTerm);
  };
  const logoutHandler = () =>{
    dispatch(logout())
    navigate('/')
}
  return (
    <div className='topbar2'>
    <div className="top-bar">
      <div className='topbar1'>
        
                <h1 className='user username-color'>Welcome!{user ? user.username : 'Guest'}</h1>
      </div>
      <div className="top-bar-icons">

      <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="search-icon" onClick={handleSearch}>
        <AiOutlineSearch />
      </div>
    </div>
        <Link to='/Register' className="button">Sign in</Link>
        <NavLink exact to="/wishlist" activeClassName="active">
          <div className="top-bar-icon">
            <FcLike />
          </div>
        </NavLink>
        <NavLink to="/cart" activeClassName="active">
          <div className="top-bar-icon">
            <AiOutlineShoppingCart />
          </div>
        </NavLink>
        <NavLink to="/profile" activeClassName="active">
          <div className="top-bar-icon">
            <CgProfile />
          </div>
        </NavLink>
      </div>
      
        <button className="button" onClick={logoutHandler}>Logout</button>
    </div>
    </div>
  );
};

export default TopBar;

