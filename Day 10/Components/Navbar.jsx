import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import '../Assets/css/Topbar.css';
import { useSelector } from 'react-redux';
import Cartbtn from './Cartbtn';
const TopBar = () => {

  const state=useSelector((state)=>state.addItems)
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Handle search logic here using the searchTerm state
    console.log('Searching for:', searchTerm);
  };
 
  return (
    <div className='topbar2'>
    <div className="top-bar">
     
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
        <NavLink to="/profile" activeClassName="active">
          <div className="top-bar-icon">
            <CgProfile />
          </div>
        </NavLink>
        <Cartbtn/>
      </div>
      
       
    </div>
    </div>
  );
};

export default TopBar;

