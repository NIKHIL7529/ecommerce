import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="appname">FlipZone</div>
      {/* <div className="searchbar">
        <input type="text" placeholder="Search Here" />
        <div className="searchicon">
          <SearchIcon />
        </div>
      </div> */}
      <div className="account">
        {/* <span>Suraj</span>
        <AccountCircleIcon /> */}
        Logout
      </div>
    </div>
  );
}
