import "../App.css";
import aboutImg from "../assets/kingsukh/out.jpg"; 

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-left">
        <img src={aboutImg} alt="Kingsukh Guest House" />
      </div>

      <div className="about-right">
        <div className="about-heading">
          <h5>ABOUT US</h5>
          <div className="about-line"></div>
        </div>
        
        <h2>The Best Holidays Start Here!</h2>
        <p>
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by
          the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
          Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
          captivating Panchat Dam. Revel in the embrace of comfort, relish
          delightful meals, and unwind in our verdant garden oasis. Your ideal
          retreat beckons, promising a harmonious blend of nature's beauty and
          heartfelt hospitality. Explore the hidden gems of Purulia, creating
          memories that linger long after your stay.
        </p>

        <p><span className="contact">
          Address: Beside Barshal Water Tank, Manpur, Barhanti,
          West Bengal 723156</span>
          </p><p>
         <span className="contact"> Contact us: +91 9007062180</span>
        </p>
        

         <a href="https://wa.me/919007062180">
          <button className="book-btn">BOOK NOW</button>
        </a>
      </div>
    </div>
  );
};

export default About;
