import "../App.css";

import img1 from "../assets/kingsukh/out.jpg";
import img2 from "../assets/kingsukh/ayodhya.webp";
import img3 from "../assets/kingsukh/large.jpg";
import img4 from "../assets/kingsukh/palash.webp";
import img5 from "../assets/kingsukh/small.jpg";
import img6 from "../assets/kingsukh/baranti.webp";
import img7 from "../assets/kingsukh/recep.jpg";
import img8 from "../assets/kingsukh/flower.jpg";
import img9 from "../assets/kingsukh/room1.jpg";
import img10 from "../assets/kingsukh/mithonDam.webp";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <section id="gallary" className="gallery-section">
      <div className="gallery-title">
        <h2>GALLARY</h2>
      <div className="gallery-line"></div>
      </div>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;