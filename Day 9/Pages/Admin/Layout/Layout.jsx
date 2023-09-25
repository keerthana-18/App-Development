import React from 'react';
import Topbar from './Topbar'; // Import your Topbar component
import Sidebar from '../../Components/Sidebar'; // Import your Sidebar component

const Layout = ({ children }) => {
  return (
    
    <div className="Layout">
      <Topbar />
      <Sidebar>
        {children} {/* Render the content inside the Sidebar component */}
      </Sidebar>
    </div>
    
  );
};

export default Layout;
