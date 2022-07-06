import "./../../pages/auth/login.css";

import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export default function AddOwnerForm() {
  const navigate = useNavigate();
  const [owner, setOwner] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    nationalId: "",
  });

  const handleChange = (e) => {
    setOwner({
      ...owner,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/owners/", owner);
      toast.success("Owner successfully registered to VTMS");
      navigate("/dashboard-home");
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
            value={owner.firstName}
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
            value={owner.lastName}
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
            value={owner.email}
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
            value={owner.telephone}
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
            value={owner.nationalId}
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary custom-btn mt-2 w-100">
          Submit
        </button>
      </form>
    </div>
  );
}
