import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "./JobCard.css";

const JobListing = () => {
  return (
    <div className="job-container">
      <div className="job-left">
        <div className="job-header">
          <h2 className="job-title">Senior Finance Executive Revenue To Record CA Freshers</h2>
          <p className="job-company">Unacademy <span className="job-rating"><FaStar /> 3.0 (1945 Reviews)</span></p>
          <div className="job-details">
            <span>0 - 2 years</span>
            <span>| Not Disclosed</span>
            <span className="job-location"><FaMapMarkerAlt /> Bengaluru</span>
          </div>
          <div className="job-actions">
            <button className="register-btn">Register to apply</button>
            <button className="apply-btn">Login to apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
