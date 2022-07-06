import "./landing.css";
import headerImg from "./home.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <Navbar/>
      <div className="landing-content">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="left-content">
              <div className="slogan text-left">
                <h1>Fast, secured and accessible vehicle tracking system!</h1>
              </div>
              <div className="descr">
              For sure you have made a right choice
              </div>

              <div
                className="btn custom-btn hello"
                onClick={() => navigate("/signUp")}
              >
                Get started
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="right-content">
              <img src={headerImg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
