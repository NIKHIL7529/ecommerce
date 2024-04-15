import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import NavbarFooter from "./Components/NavbarFooter/NavbarFooter";
import Dashboard from "./Components/Dashboard/Dashboard";
import Signup from "./Components/Signup/Signup";
import Footer from "./Components/Footer/Footer";
import Dealsofday from "./Components/Dealsofday/Dealsofday";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              {/* <NavbarFooter /> */}
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dealsofday" element={<Dealsofday />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
