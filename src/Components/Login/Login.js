import "./Login.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
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

  const handleLogin = () => {
    navigate("/dashboard");
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
        </div>
        <div className="loginbutton" onClick={handleLogin}>
          Login
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
          />
        </div>
        <div className="signup">
          Not Registered? <Link to="/signup">Create an Account</Link>
        </div>
      </div>
    </div>
  );
}
