import Sidebar from "../../components/dashboard/sidebar";
import AddOwnerForm from "../../components/owner/createowner";
import "../auth/login.css";


export default function AddOwner() {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-2 col-lg-2 sideb">
        <Sidebar />
      </div>
      <div className="col-md-10 col-lg-10">
     <AddOwnerForm/>
      </div>
    </div>
  </div>
  );
}
