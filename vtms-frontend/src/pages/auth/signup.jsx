import SignUpForm from "../../components/auth/signUpForm";
import "./login.css";
import Navbar from "../../components/Navbar";

export default function SignUp() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid d-flex justify-content-center">
        <div className="col-md-6 col-lg-6 col-sm-12">
          <div className="login">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>

  );
}
