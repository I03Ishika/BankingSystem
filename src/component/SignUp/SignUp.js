// import React from 'react';
// import { Link } from 'react-router-dom'; 
// import './SignUp.css'; 

// const SignUp = () => {
//   return (
//     <div className="container">
//       <h2>Signup Page</h2>
//       <div className="box">
//         <input type="text" placeholder="First Name" className="input" />
//         <input type="text" placeholder="Last Name" className="input" />
//         <input type="email" placeholder="Email" className="input" />
//         <button className="button signup-button">
//           <Link to="/login" className="link">Sign Up</Link>
//         </button>
//         <Link to="/" className="link">Back to Login</Link>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './SignUp.css'; 

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSignUp = () => {
    
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>Signup Page</h2>
      <div className="box">
        <input 
          type="text" 
          placeholder="First Name" 
          className="input" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          className="input" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="input" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="input" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button 
          className="button signup-button" 
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        <Link to="/" className="link">Back to Login</Link>
      </div>
    </div>
  );
};

export default SignUp;

