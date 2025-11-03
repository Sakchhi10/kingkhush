import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../src/components/home';
import About from '../src/components/about';
import Services from '../src/components/servives';
import Contact from '../src/components/contact';
import Gallary from '../src/components/gallary';
import Rooms from '../src/components/rooms';
import Living from './components/living';
import Location from "../src/components/location";
import Footer from "../src/components/footer";
import './App.css';



function App() {
  return (
    <Router>
      {/* <Header /> */}
      {/* <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/rooms">Rooms</Link> |{" "}
        <Link to="/services">Services</Link> |{" "}
        <Link to="/gallary">Gallery</Link> |{" "}
        <Link to="/map">Map</Link>
      </nav> */}
      <Home/>
      <About/>
      <Living/>
      <Services/>
      <Gallary/>
      <Contact/>
      <Location/>
      <Footer/>
    </Router>
  );
}

export default App;