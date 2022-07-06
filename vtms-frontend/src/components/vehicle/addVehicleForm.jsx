import "./../../pages/auth/login.css";
import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AddVehicleForm() {
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState({
    model: "",
    vin: "",
    engine: "",
    color: "",
    plateNumber: "",
    owner: "",
  });

  const handleChange = (e) => {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/vehicles/", vehicle);
      toast.success("Vehicle Successfully recorderd");
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
            placeholder="Vehicle Model"
            name="model"
            value={vehicle.vehicleModel}
            onChange={handleChange}
          />
        </div>
        

        <div class="form-group mt-3">
          <input
            type="text"
            class="form-control mt-3"
            id="exampleInputEmail1"
            name="vin"
            placeholder="Vehicle VIN"
            value={vehicle.vin}
            onChange={handleChange}
          />
        </div>

        <div class="form-group mt-3">
          <input
            type="text"
            class="form-control mt-3"
            id="exampleInputEmail1"
            placeholder="Vehicle Engine"
            name="engine"
            value={vehicle.engine}
            onChange={handleChange}
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control mt-3"
            id="exampleInputEmail1"
            placeholder="Vehicle Color"
            name="color"
            value={vehicle.color}
            onChange={handleChange}
          />
        </div> 

        <div class="form-group">
          <input
            type="text"
            class="form-control mt-3"
            id="exampleInputEmail1"
            placeholder="Plate Number"
            name="plateNumber"
            value={vehicle.plateNumber}
            onChange={handleChange}
          />
        </div>

        <div class="form-group mt-3">
          <input
            type="text"
            class="form-control mt-3"
            id="exampleInputPassword1"
            placeholder="Vehicle Owner"
            name="owner"
            value={vehicle.owner}
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
