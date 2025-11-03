import "../App.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-container">
        {/* Left Info Card */}
        <div className="contact-info">
          <h2>Contact Info</h2>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>
              Beside Barshal Water Tank, <br />
              Manpur, Barhanti, <br />
              West Bengal 723156
            </p>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>kkghosh0099@gmail.com</p>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <p>+91 9007062180</p>
          </div>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>

          <form>
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="First Name" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Last Name" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Mobile Number" required />
              </div>
            </div>

            <div className="form-group full-width">
              <textarea
                placeholder="Write your message here..."
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
