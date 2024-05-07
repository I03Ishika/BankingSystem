// Navbar.js
import React from 'react';

const Navbar = () => {
  // Get current date and time
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="navbar" style={{ backgroundColor: 'orange', color: 'white', padding: '10px' }}>
      <div>
        <img src="logo-url" alt="Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
      </div>
      <div className="navbar-column">
        <div>
          <p>Bank: PIC Bank</p>
          <p>Branch: Mali</p>
        </div>
      </div>
      <div className="navbar-column">
        <h3>Agent Dashboard</h3>
        <p>{currentDate}</p>
        <p>{currentTime}</p>
      </div>
      <div className="navbar-column">
        <p>UserId: 12345</p>
        <p>UserName: Agent</p>
      </div>
      <div>
        <img src="logo-url" alt="Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
      </div>
    </div>
  );
};

export default Navbar;
