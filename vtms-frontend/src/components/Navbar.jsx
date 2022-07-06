import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    const navigate = useNavigate();
    return (
            <nav class="navbar">
                <a class="navbar-brand" href="#">
                <img src={logo} alt="" />
                        VTMS
                </a>
                <div
                className="btn"
                onClick={() => navigate("/login")}
              >
                Login
              </div>
            </nav>

    )
}
