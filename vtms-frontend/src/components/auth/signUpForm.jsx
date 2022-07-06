import "./../../pages/auth/login.css";

import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function SignUpForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    nationalId: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/user/register", user);
      toast.success("Successfully registered to VTMS");
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <div className="container">
      <form className="w-75 p-3" onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            type="text"
            class="form-control mt-3"
            id="exampleInputEmail1"
            placeholder="First Name"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </div>

        <div class="form-group mt-3">
          <input
            type="text"
            class="form-control mt-3"
            id="exampleInputEmail1"
            name="lastName"
            placeholder="Last Name"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>

        <div class="form-group mt-3">
          <input
            type="email"
            class="form-control mt-3"
            id="exampleInputEmail1"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control mt-3"
            id="exampleInputEmail1"
            placeholder="Telephone"
            name="telephone"
            value={user.telephone}
            onChange={handleChange}
          />
        </div> 

        <div class="form-group">
          <input
            type="text"
            class="form-control mt-3"
            id="exampleInputEmail1"
            placeholder="National Id"
            name="nationalId"
            value={user.nationalId}
            onChange={handleChange}
          />
        </div>

        <div class="form-group mt-3">
          <input
            type="password"
            class="form-control mt-3"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary custom-btn w-100">
          Submit
        </button>

        <div className="bottom-content mt-3 text-center">
          <p>
            Already have account !?
            <span className="span-sign" onClick={() => navigate("/login")}>
              Log in
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
