import "../App.css";
import room1 from "../assets/kingsukh/small.jpg";
import room2 from "../assets/kingsukh/large.jpg";
import { Heart, PaintBucket , Shield } from "lucide-react";

const Living = () => {
  const rooms = [
    {
      id: 1,
      image: room1,
      title: "Cozy Haven Room",
      description:
        "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
      price: "Rs. 1000/night",
    },
    {
      id: 2,
      image: room2,
      title: "Spacious Serenity Suite",
      description:
        "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
      price: "Rs. 1500/night",
    },
  ];

  return (
    <div id="rooms" className="living-section">
    
        <div className="about-heading">
          <h5>OUR LIVING ROOM</h5>
          <div className="about-line"></div>
        </div>
        <h2>The Most Memorable Rest Time Starts Here.</h2>

      <div className="rooms-container">
        {rooms.map((room) => (
          <div className="room-card" key={room.id}>
            <div className="room-image-container">
              <img src={room.image} alt={room.title} className="room-img" />
              <div className="room-icons">
                <div className="icon-circle pink">
                  <Heart className="icon" />
                </div>
                <div className="icon-circle purple">
                  <PaintBucket className="icon" />
                </div>
                <div className="icon-circle blue">
                  <Shield className="icon" />
                </div>
              </div>
            </div>
            <h3>{room.title}</h3>
            <p>{room.description}</p>
            <p className="price">
              Starting from <strong>{room.price}</strong>
            </p>
             <a href="https://wa.me/919007062180">
              <button className="book-btn">BOOK NOW</button>
             </a>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Living;
