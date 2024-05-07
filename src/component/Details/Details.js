// Details.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import './Details.css';


const Details = () => {
  return (
    <div>
      <Navbar />
      <div className="details-container">
        <div className="details-column">
          <div className="details-box">
            <h3>Cheque Details</h3>
            <p>Record ID: 00112</p>
          <p>Status: Returned</p>
          <p>Last Actor: Bouser1</p>
          <div className="issuer-details">
            <h4>Issuer Details</h4>
            <p>MICR Number: 123456789</p>
            <p>Cheque Number: 000654</p>
            <p>Account Number: 12345678</p>
          </div>
          <div className="beneficiary-details">
            <h4>Beneficiary Details</h4>
            <p>Beneficiary Customer ID: 123456789</p>
            <p>Beneficiary Name: Donald Trump</p>
            <p>Beneficiary Account Number: 1234567875</p>
            <p>Check Date: 14-Mar-24</p>
            <p>Check Amount: 1500</p>
          </div>
          <div className="return-reason">
            <h4>Return Reason</h4>
            <p>Return Code: 01</p>
            <p>Return Desc: Image Not Clear</p>
            <p>Account Number: 12345678</p>
            </div>
          </div>
        </div>
        <div className="details-column">
          <div className="details-box">
            <h3>Coloured Front Image of Cheque</h3>
            <img src="https://www.newwashbank.com/mstinc/nhp/en/images/help_check_image.png" alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="details-box">
            <h3>Coloured Rear Image of Cheque</h3>
            <img src="https://i.pinimg.com/originals/0d/d1/9c/0dd19c3c519f8825f6c25ec7cc660479.jpg" alt="Image 2" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <button className="rescan-button">Rescan</button>
        <button className="submit-button">Submit</button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default Details;
