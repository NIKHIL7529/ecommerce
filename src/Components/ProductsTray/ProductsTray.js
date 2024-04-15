import "./ProductsTray.css";
import image from "../../images/dashboard.jpg";

export default function ProductsTray() {
  return (
    <div className="tray">
      <div className="trayproduct">
        <div className="imgcontainer">
          <img src={image} alt="" />
        </div>
        <div className="content">Clothes →</div>
      </div>
      <div className="trayproduct">
        <div className="imgcontainer">
          <img src={image} alt="" />
        </div>
        <div className="content">Clothes →</div>
      </div>
      <div className="trayproduct">
        <div className="imgcontainer">
          <img src={image} alt="" />
        </div>
        <div className="content">Clothes →</div>
      </div>
      <div className="trayproduct">
        <div className="imgcontainer">
          <img src={image} alt="" />
        </div>
        <div className="content">Clothes →</div>
      </div>
    </div>
  );
}
