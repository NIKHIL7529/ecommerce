import "./Dashboard.css";
import image from "../../images/dashboard.jpg";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="poster">
        <img src={image} alt="" />
        <div className="overlay">
          <div>
            <div className="caption">FlipZone</div>
            <div>Best Place For Best Discounts</div>
          </div>
          <div className="flex">
            <Link to="/dealsofday">
              <div>Deals of the day →</div>
            </Link>
            <Link to="/trendingproducts">
              <div>Trending Products →</div>
            </Link>
            <Link to="/localstore">
              <div>Local Store →</div>
            </Link>
          </div>
          <div className="Slider">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}
