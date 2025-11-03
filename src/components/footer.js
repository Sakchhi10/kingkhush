import "../App.css";
import facebookIcon from "../assets/kingsukh/facebook.png";
import instagramIcon from "../assets/kingsukh/instagram.png";
import youtubeIcon from "../assets/kingsukh/youtube.png";
import twitterIcon from "../assets/kingsukh/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-column">
          <h2 className="footer-title">
            Kingsukh <br /> Guest <br /> House
          </h2>
          <p className="footer-text">
            Discover a world of comfort, luxury, and adventure as you explore our
            curated selection of hotels, making every moment of your getaway truly
            extraordinary.
          </p>
          <button className="book-now-btn">BOOK NOW</button>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3 className="footer-heading">QUICK LINKS</h3>
          <ul>
            <li>Browse Destinations</li>
            <li>Special Offers & Packages</li>
            <li>Room Types & Amenities</li>
            <li>Customer Reviews & Ratings</li>
            <li>Travel Tips & Guides</li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-column">
          <h3 className="footer-heading">OUR SERVICES</h3>
          <ul>
            <li>Concierge Assistance</li>
            <li>Flexible Booking Options</li>
            <li>Airport Transfers</li>
            <li>Wellness & Recreation</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-column">
          <h3 className="footer-heading">CONTACT US</h3>
          <p>
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
          </p>
          <p>kkghosh0099@gmail.com</p>
          <p>+91 9007062180</p>

         <div className="social-icons">
            <img src={facebookIcon} alt="Facebook" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={youtubeIcon} alt="YouTube" />
            <img src={twitterIcon} alt="Twitter" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2024 Kingsukh Guest House. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
