
// import React from 'react';
// import './Dashboard.css';
// import PieChart1 from '../PieChart/PieChart1'; // Adjust the import path based on your project structure

// const Dashboard = () => {
//   // Data for the PieChart
//   const pieChartData = [
//     { title: 'Scanned', value: 120, color: '#E38627' },
//     { title: 'Submitted', value: 35, color: '#C13C37' },
//     { title: 'Deleted', value: 0, color: '#6A2135' },
//     { title: 'Returned', value: 5, color: '#215E6A' },
//     { title: 'Rejected', value: 2, color: '#612121' },
//   ];

//   return (
//     <div className="dashboard-container">
//       <h2>Dashboard</h2>
//       <div className="dashboard-row">
//         <div className="dashboard-box">
//           <h3>Agent Queue</h3>
//           <div className="pie-chart-container">
//             <PieChart1 data={pieChartData} />
//           </div>
//           <div className="detail-list">
//             <p>Scanned: 120</p>
//             <p>Submitted: 35</p>
//             <p>Deleted: 0</p>
//             <p>Returned: 5</p>
//             <p>Rejected: 2</p>
//           </div>
//         </div>
//         {/* Other boxes */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// Dashboard.js
// Dashboard.js
import React from 'react';
import './Dashboard.css';
import PieChart1 from './PieChart/PieChart1';
import PieChart2 from './PieChart/PieChart2';
import PieChart3 from './PieChart/PieChart3';
import PieChart4 from './PieChart/PieChart4';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Data for the PieCharts
  const pieChartData1 = [
    { title: 'Scanned', value: 120, color: '#E38627' },
    { title: 'Submitted', value: 35, color: '#C13C37' },
    { title: 'Deleted', value: 0, color: '#6A2135' },
    { title: 'Returned', value: 5, color: '#215E6A' },
    { title: 'Rejected', value: 2, color: '#612121' },
  ];

  const pieChartData2 = [
    { title: 'Pending Verification', value: 10, color: '#E38627' },
    { title: 'Sent for Authorisation', value: 9, color: '#C13C37' },
    { title: 'Sent for Reconciliation', value: 11, color: '#6A2135' },
    { title: 'Returned', value: 5, color: '#215E6A' },
  ];

  const pieChartData3 = [
    { title: 'Sent to CLH Interface', value: 7, color: '#E38627' },
    { title: 'Waiting to be Sent', value: 4, color: '#C13C37' },
  ];

  const pieChartData4 = [
    { title: 'Authorized', value: 7, color: '#E38627' },
    { title: 'Rejected', value: 2, color: '#C13C37' },
  ];

  return (
    

    <>
     <Navbar />

     <div className="dashboard-container">
        <div className="dashboard-row">
          <div className="dashboard-box">
            <h3>Box 1</h3>
            <img src="https://www.newwashbank.com/mstinc/nhp/en/images/help_check_image.png" alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="dashboard-box">
            <h3>Box 2</h3>
            <img src="https://i.pinimg.com/originals/0d/d1/9c/0dd19c3c519f8825f6c25ec7cc660479.jpg" alt="Image 2" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
        
      </div>


    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="dashboard-row">
        <div className="dashboard-box">
        <div>
      <Link to="/records"><button>Agent Queue</button></Link>
    </div>
          <div className="pie-chart-container">
            <PieChart1 data={pieChartData1} />
          </div>
          <div className="detail-list">
            <p>Scanned: 120</p>
            <p>Submitted: 35</p>
            <p>Deleted: 0</p>
            <p>Returned: 5</p>
            <p>Rejected: 2</p>
          </div>
        </div>
        
        
        <div className="dashboard-box">
          <h3>Back Office Queue</h3>
          <div className="pie-chart-container">
            <PieChart2 data={pieChartData2} />
          </div>
          <div className="detail-list">
            <p>Pending Verification: 10</p>
            <p>Sent for Authorization: 9</p>
            <p>Sent for Reconciliation: 11</p>
            <p>Returned: 5</p>
          </div>
        </div>

        <div className="dashboard-box">
          <h3>Reconciliation Queue</h3>
          <div className="pie-chart-container">
            <PieChart3 data={pieChartData3} />
          </div>
          <div className="detail-list">
            <p>Sent to CLH Interface: 7</p>
            <p>Waiting to be sent: 4</p>
          </div>
        </div>

        <div className="dashboard-box">
          <h3>Corporate Queue</h3>
          <div className="pie-chart-container">
            <PieChart4 data={pieChartData4} />
          </div>
          <div className="detail-list">
            <p>Authorized: 7</p>
            <p>Rejected: 2</p>
          </div>
        </div>
        
        
      </div>
    </div>
    </>
  );
};

export default Dashboard;
