import Sidebar from "../../components/dashboard/sidebar";
import AddVehicleForm from "../../components/vehicle/addVehicleForm";
import "../auth/login.css";


export default function AddVehicle() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 col-lg-2 sideb">
                    <Sidebar />
                </div>
                <div className="col-md-10 col-lg-10">
                    <AddVehicleForm />
                </div>
            </div>
        </div>
    );
}
