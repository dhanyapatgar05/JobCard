import React from "react";
import { FaStar, FaFacebookSquare,  FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TfiBag } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { BsCurrencyRupee,BsFillHexagonFill  } from "react-icons/bs";
import "./JobCard.css";

const JobListing = () => {
  return (
    <div className="job-container">
      <div className="job-left">
        <div className="job-header-container">
          <div className="job-header">
            <div className="job-title-container">
              <h2 className="job-title">Senior Finance Executive Revenue To Record CA Freshers</h2>
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
                <span className="job-location"><CiLocationOn  className="location-icon" /> Bengaluru</span>
                <div className="job-save-container">
                  <a href="#" className="job-save"> Send me jobs like this</a>
                </div>
              </div>
            </div>
            <hr className="divider" />
            <div className="job-meta-actions">
              <div className="job-meta">
                <span>Posted: <strong>17 days ago</strong></span>
                <span>Openings: <strong>2</strong></span>
                <span>Applicants: <strong>884</strong></span>
              </div>
              <div className="job-actions">
                <button className="register-btn">Register to apply</button>
                <button className="apply-btn">Login to apply</button>
              </div>
            </div>
          </div>
        </div>
        {/* Job Description Section */}
        <div className="job-description-container"> 
          <div className="job-description">
            <h3>Job description</h3>
            <p><strong>Unacademy - Bangalore</strong></p>
            <p>Position: Senior Finance Executive Revenue</p>
            <h4>Job Description</h4>
            <ul>
              <li>Conduct a three-way revenue reconciliation (Revenue to Record).</li>
            </ul>
            <a href="#" className="read-more">read more</a>
            {/* Key Skills */}
            <h4>Key Skills</h4>
            <p>Skills highlighted with '☆' are preferred key skills</p>
            <div className="key-skills">
              <span className="skill">☆ Ca</span>
            </div>
            <div className="key-skills">
              <span className="skill">Revenue Reconciliation</span>
              <span className="skill">Gst Filing</span>
              <span className="skill">Gst</span>
              <span className="skill">Revenue Recognition</span>
            </div>
            <hr className="divider" />
            {/* Social Media Links */}
            <div className="social-links">
              <FaFacebookSquare  className="social-icon" />
              <FaSquareXTwitter  className="social-icon1" />
              <FaLinkedin className="social-icon" />
            </div>
          </div>
        </div> 
      </div>
      {/* Right Side */}
      <div className="job-right">
        <div className="suggestion-container">
          <div className="job-suggestions">
            <h3>Unacademy roles you might be interested in</h3>
            <div className="job-suggestion">
              <div className="suggestion-text">
                <h4>Korean Educator</h4>
                <p><TfiBag />1-5 Yrs</p>
                <p><CiLocationOn/> Bengaluru(Domlur)</p>
                <p>Posted 19 days ago</p>
              </div>
              <img src="https://1000logos.net/wp-content/uploads/2022/09/Unacademy-Symbol.png" alt="Company Logo" className="suggestion-logo" />
            </div>
            <div className="job-suggestion">
              <div className="suggestion-text">
                <h4>Sales Manager/ Senior Sales Manager</h4>
                <p><TfiBag />2-5 Yrs</p>
                <p><CiLocationOn /> Delhi / NCR(Noida-Greater Noida)</p>
                <p>Posted 24 days ago</p>
              </div>
              <img src="https://1000logos.net/wp-content/uploads/2022/09/Unacademy-Symbol.png" alt="Company Logo" className="suggestion-logo" />
            </div>
           <div className="job-suggestion">
              <div className="suggestion-text">
                <h4>Business Development Manager</h4>
                <p><TfiBag />3-5 Yrs</p>
                <p><CiLocationOn /> Varanasi</p>
                <p>Posted 30 days ago</p>
              </div>
              <img src="https://1000logos.net/wp-content/uploads/2022/09/Unacademy-Symbol.png" alt="Company Logo" className="suggestion-logo" />
            </div>
          </div>
        </div>
        {/* Reviews Section */}
        <div className="job-reviews">
          <h3>Reviews <a href="#" className="review-link">Read all 1945 reviews</a></h3>
          <div className="review-item">
            <h4>Android Developer for 3 months in Bangalore</h4>
            <p><strong>Anonymous</strong> | 19 Feb 2025</p>
            <div className="review-rating">
              <FaStar className="filled-star" />
              <FaStar className="empty-star" />
              <FaStar className="empty-star" />
              <FaStar className="empty-star" />
              <FaStar className="empty-star" />
            </div>
            <h4>Likes</h4>
            <p>No, work culture is extremely toxic</p>
            <p className="review-source">Powered by <BsFillHexagonFill /><strong>AmbitionBox</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
