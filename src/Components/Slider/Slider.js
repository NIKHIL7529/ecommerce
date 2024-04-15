import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../images/dashboard.jpg";
import poster1 from "../../images/poster1.jpg";
import poster2 from "../../images/poster2.jpg";
import Slick from "react-slick";
import { Link } from "react-router-dom";

export default function Slider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <Slick {...settings}>
        <div className="grid">
          <div className="sliderdiv">
            <img src={image} alt="" />
          </div>
          <div className="sliderdiv1">
            <span>Follow us on Instagram</span>
            <Link>Instagram Link</Link>
          </div>
        </div>
        <div className="grid">
          <div className="sliderdiv">
            <img src={poster1} alt="" />
          </div>
          <div className="sliderdiv1">
            <span>Follow us on Whatsapp</span>
            <Link>Whatsapp Link</Link>
          </div>
        </div>
        <div className="grid">
          <div className="sliderdiv">
            <img src={poster2} alt="" />
          </div>
          <div className="sliderdiv1">
            <span>Follow us on Telegram</span>
            <Link>Telegram Link</Link>
          </div>
        </div>
      </Slick>
    </div>
  );
}
