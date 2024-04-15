import "./NavbarFooter.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function NavbarFooter() {
  return (
    <div className="navbarfooter">
      <div className="dropdown">
        <div className="navdropdown">
          Amazon Products
          <div className="arrowdropdown">
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className="dropdownmenu">
          <ul>
            <li>Clothes</li>
            <li>Electronics</li>
            <li>Grocery</li>    
          </ul>
        </div>
      </div>
      <div className="dropdown">
        <div className="navdropdown">
          Others
          <div className="arrowdropdown">
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
