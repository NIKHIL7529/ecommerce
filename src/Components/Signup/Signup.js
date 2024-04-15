import ReactPasswordChecklist from "react-password-checklist";
// import "./Signup.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => {
    const Email = e.target.value;
    setEmail(Email);
  };

  const checkPassword = (e) => {
    const Password = e.target.value;
    setPassword(Password);
  };

  const handleSignup = () => {
    navigate("/login");
  };

  return (
    <div className="login">
      <div className="loginbox">
        <div className="loginsvg">
          <AccountCircleIcon />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => handleEmail(e)}
          />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => checkPassword(e)}
          />
          <div className="passwordchecklist">
            <ReactPasswordChecklist
              rules={["minLength", "specialChar", "number", "capital"]}
              minLength={8}
              value={password}
              onChange={(isValid) => {}}
              style={password.length === 0 ? { display: "none" } : ""}
            />
          </div>
        </div>
        <div className="loginbutton" onClick={handleSignup}>
          Signup
        </div>
        <div className="googlelogin">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              const credentialResponseDeccoded = jwtDecode(
                credentialResponse.credential
              );
              console.log(credentialResponseDeccoded);
              navigate("/dashboard");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            style={{ innerWidth: "fit-content", outerWidth: "fit-content" }}
          />
        </div>
        <div className="signup">
          Already a user? <Link to="/login">Click here to Login</Link>
        </div>
      </div>
    </div>
  );
}
