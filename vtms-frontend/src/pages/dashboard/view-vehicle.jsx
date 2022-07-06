import Sidebar from "../../components/dashboard/sidebar";
import ViewVehicles from "../../components/vehicle/viewVehicles";
import "../auth/login.css";


export default function ViewVehiclesPage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 col-lg-2 sideb">
                    <Sidebar />
                </div>
                <div className="col-md-10 col-lg-10">
                    <ViewVehicles />
                </div>
            </div>
        </div>
    );
}
