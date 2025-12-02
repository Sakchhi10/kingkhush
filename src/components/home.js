import "../../src/App.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar">

        <a href="https://wa.me/919007062180" className="logo-link">
          <div className="logo">
            <h2>
              Kingsukh
              <br />
              Guest House
            </h2>
          </div>
        </a>
        

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#gallary">Gallary</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>



        <a href="https://wa.me/919007062180">
          <button className="book-btn">BOOK NOW</button>
        </a>
      </div>

      <div  id="#home" className="hero-content">
        <p className="tagline">Simple - Unique - Friendly</p>
        <h1>
          Make Yourself At Home <br /> In Our{" "}
          <span className="highlight">Guest House</span>.
        </h1>
      </div>


      <div className="book-container">
        <a href="https://wa.me/919007062180">
          <button className="book-btn">BOOK NOW</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
