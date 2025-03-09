import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";
import "./JobCard.css";

const JobListing = () => {
  return (
    <div className="job-container">
    <div className="job-left">
      <div className="job-header">
        <div className="job-title-container">
          <h2 className="job-title">Senior Finance Executive Revenue To Record CA Freshers</h2>
          {/* <img src="https://1000logos.net/wp-content/uploads/2022/09/Unacademy-Symbol.png" alt="Company Logo" className="job-logo" /> */}
        </div>
        <div className="job-company-container">
          <span className="job-company">Unacademy</span>
          <span className="job-rating"><FaStar className="star-icon" /> 3.0 (1945 Reviews)</span>
          <img src="https://1000logos.net/wp-content/uploads/2022/09/Unacademy-Symbol.png" alt="Company Logo" className="job-logo" />

        </div>
        <div className="job-details-wrapper">
          <div className="job-details">
            <span>0 - 2 years</span>
            <span><BsCurrencyRupee /> Not Disclosed</span>
          </div>
          <div className="job-location-line">
            <span className="job-location"><FaMapMarkerAlt className="location-icon" /> Bengaluru</span>
            <div className="job-save-container">
              {/* <img src="/path-to-save-icon.png" alt="Save Job" className="job-save-icon" /> */}
              <a href="#" className="job-save"> Send me jobs like this</a>
            </div>
          </div>
        </div>
        <hr className="divider" />
        <div className="job-meta-actions">
          <div className="job-meta">
            <span>Posted: 17 days ago</span>
            <span>Openings: 2</span>
            <span>Applicants: 884</span>
          </div>
          <div className="job-actions">
            <button className="register-btn">Register to apply</button>
            <button className="apply-btn">Login to apply</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default JobListing;
