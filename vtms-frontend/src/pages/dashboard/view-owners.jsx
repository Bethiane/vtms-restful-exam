import Sidebar from "../../components/dashboard/sidebar";
import ViewOwners from "../../components/owner/viewOwners";
import "../auth/login.css";


export default function ViewOwnersPage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 col-lg-2 sideb">
                    <Sidebar />
                </div>
                <div className="col-md-10 col-lg-10">
                    <ViewOwners />
                </div>
            </div>
        </div>
    );
}
