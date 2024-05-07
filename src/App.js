// import React from 'react';
// import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
// import Login from './component/Login/Login';
// import SignUp from './component/SignUp/SignUp';
// import Dashboard from './component/Dashboard/Dashboard';

// const App = () => {
//   return (
//     <>
//     <BrowserRouter>
//       <div>
//         <nav>
//           <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', padding: 0 }}>
//             <li style={{ marginRight: '10px' }}>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/signup">SignUp</Link>
//             </li>
//           </ul>
//         </nav>
//         {/* <Switch>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/signup">
//             <SignUp />
//           </Route>
//         </Switch> */}

//         <Routes>
//             <Route path='/login' element= {<Login />} />
//             <Route path='/SignUp' element= {<SignUp />} />
//             <Route path='/Dashboard' element= {<Dashboard />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//     </>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
import Dashboard from './component/Dashboard/Dashboard';
import Records from './component/Records/Records';
import Details from './component/Details/Details';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/records' element={<Records />} />
          <Route path='/details' element={<Details />} />
        </Routes>

        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', padding: 0 }}>
            <li style={{ marginRight: '10px' }}>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </nav>
      </div>
    </BrowserRouter>
  );
};

export default App;

