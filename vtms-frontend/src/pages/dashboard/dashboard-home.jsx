import Sidebar from "../../components/dashboard/sidebar";
import UserContext from "../../context/userContext";
import "./dashboard.css";
import { useContext } from "react";
import ViewVehicles from "../../components/vehicle/viewVehicles";
import ViewOwners from "../../components/owner/viewOwners";

export default function DashboardHome() {
  const { user } = useContext(UserContext);

  return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-2 col-lg-2 sideb">
            <Sidebar />
        </div>
        <div className="col-md-10 col-lg-10">
            <ViewVehicles />
            <ViewOwners/>
        </div>
    </div>
</div>
  );
}
