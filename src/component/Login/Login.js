// import React from 'react';
// import { Link } from 'react-router-dom'; 
// import './Login.css'; 

// const Login = () => {
//   return (
//     <div className="container">
//       <h2>Login Page</h2>
//       <div className="box">
//         <input type="text" placeholder="ID" className="input" />
//         <input type="password" placeholder="Password" className="input" />
//         <button className="button login-button">
//           <Link to="/dashboard" className="link">Login</Link>
//         </button>
//         <Link to="/forgot-password" className="link">Forgot UserName or Password?</Link>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = () => {
    
    if (username && password) {
      navigate('/dashboard'); 
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <div className="box">
        <input 
          type="text" 
          placeholder="ID" 
          className="input" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="input" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button className="button login-button" onClick={handleLogin}>
          Login
        </button>
        <Link to="/forgot-password" className="link">Forgot UserName or Password?</Link>
      </div>
    </div>
  );
};

export default Login;
