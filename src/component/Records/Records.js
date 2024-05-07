// Records.js
import React from 'react';
import Navbar from '../Navbar';
import './Records.css';
import { Link } from 'react-router-dom';

const Records = () => {
  return (
    <div>
      <Navbar />
      <div className="filter-options">
        <label htmlFor="filter">Filter by Record ID:</label>
        <select id="filter">
          <option value="00112">00112</option>
          <option value="00113">00113</option>
          <option value="00114">00114</option>
          <option value="00115">00115</option>
          <option value="00116">00116</option>
        </select>
      </div>
      <table className="records-table">
        <thead>
          <tr>
            <th>Record ID</th>
            <th>MICR</th>
            <th>Issuer A/C</th>
            <th>Cheque Number</th>
            <th>Amount</th>
            <th>Beneficiary Name</th>
            <th>Return Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /><Link to="/details">
                <button>00112</button>
              </Link></td>
            <td>MICR</td>
            <td>Issuer A/C</td>
            <td>Date</td>
            <td>Amount</td>
            <td>Beneficiary Name</td>
            <td>01</td>
          </tr>
          <tr>
            <td><input type="checkbox" />00113</td>
            <td>MICR</td>
            <td>Issuer A/C</td>
            <td>Date</td>
            <td>Amount</td>
            <td>Beneficiary Name</td>
            <td>02</td>
          </tr>
          <tr>
            <td><input type="checkbox" />00114</td>
            <td>MICR</td>
            <td>Issuer A/C</td>
            <td>Date</td>
            <td>Amount</td>
            <td>Beneficiary Name</td>
            <td>01</td>
          </tr>
          <tr>
            <td><input type="checkbox" />00115</td>
            <td>MICR</td>
            <td>Issuer A/C</td>
            <td>Date</td>
            <td>Amount</td>
            <td>Beneficiary Name</td>
            <td>03</td>
          </tr>
          <tr>
            <td><input type="checkbox" />00116</td>
            <td>MICR</td>
            <td>Issuer A/C</td>
            <td>Date</td>
            <td>Amount</td>
            <td>Beneficiary Name</td>
            <td>02</td>
          </tr>
        </tbody>
      </table>
        <Link to="/details">
        <button className="redirect-btn">Redirect to Details</button>
      </Link>
    </div>
  );
};

export default Records;
