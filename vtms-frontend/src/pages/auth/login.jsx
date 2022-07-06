import LoginForm from "../../components/auth/loginForm";
import Navbar from "../../components/Navbar";
import "./login.css";
export default function Login() {
  return (
    <div>
    <Navbar />
    <div className="container-fluid d-flex justify-content-center">
      <div className="col-md-6 col-lg-6 col-sm-12">
        <div className="login">
          <LoginForm />
        </div>
      </div>
    </div>
  </div>
  );
}
