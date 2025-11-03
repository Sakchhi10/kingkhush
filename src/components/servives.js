import "../App.css";
import { FaShieldAlt, FaConciergeBell, FaUtensils, FaMapMarkedAlt } from "react-icons/fa";
import serviceImg from "../assets/kingsukh/palash.webp";

const Services = () => {
  return (
    <>
      <div id="services" className="services-section">
        {/* Left Image */}
        <div className="services-image">
          <img src={serviceImg} alt="Service" />
        </div>

        {/* Content Center */}
        <div className="services-content">
          <div className="about-heading">
            <h5>SERVICES</h5>
            <div className="about-line"></div>
          </div>
          <h2 className="services-title">Strive Only For The Best.</h2>
          <ul className="services-list">
            <li>
              <FaShieldAlt className="service-icon blue" />
              High Class Security
            </li>
            <li>
              <FaConciergeBell className="service-icon pink" />
              24 Hours Room Service
            </li>
            <li>
              <FaUtensils className="service-icon purple" />
              Restaurant
            </li>
            <li>
              <FaMapMarkedAlt className="service-icon red" />
              Tourist Guide Support
            </li>
          </ul>
        </div>

        {/* Right Image (Half visible) */}
        <div className="services-pic">
          <img src={serviceImg} alt="Service" />
        </div>
      </div>

      <div className="service-container">
        <div className="counting">
          <h3>100+</h3>
          <p>Booking Completed</p>
        </div>
        <div className="counting">
          <h3>150+</h3>
          <p>Happy Customers</p>
        </div>
      </div>
    </>
  );
};

export default Services;
