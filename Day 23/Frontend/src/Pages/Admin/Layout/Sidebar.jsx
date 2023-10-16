import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../../../Assets/css/Sidebar.css'
import {
    FaHome,
    FaTh,
    FaBars,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import {
    CgProfile
}from "react-icons/cg";
import {
    VscFeedback
}from "react-icons/vsc";
import {
    BiLogoProductHunt
}from "react-icons/bi";
import {
    FcAbout
}from "react-icons/fc";
import {
    BiSolidHelpCircle
}from "react-icons/bi";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    
    /*const isOpen = useSelector((state) => state.sidebar.isOpen);
    const dispatch = useDispatch();
  
    const toggle = () => {
      dispatch(toggleSidebar());
    };*/
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome />
        },
        {
            path:"/admin/products",
            name:"Products",
            icon:<BiLogoProductHunt/>
        },
        {
            path:"/users",
            name:"Users",
            icon:<CgProfile/>
        },
        {
            path:"/admin/orders",
            name:"Orders",
            icon:<FaShoppingBag/>
        },
        {
            path:"/admin/feedback",
            name:"Feedback",
            icon:<VscFeedback/>
        }

    ]
    return (
        <>
        <div className="container">
        
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                  
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
        </>
    );
};

export default Sidebar;