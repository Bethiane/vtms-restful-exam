export default function ViewOwners() {

    return (
        <div>
            <button type="button" className="btn bg-app-primary bg-text-color ">
              Add candidate
            </button>
        
        <table className="table table-hover table-bordered mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email Address</th>
              <th scope="col">Telephone</th>
              <th scope="col">National ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Anne</td>
              <td>Bethiane</td>
              <td>ubethiane07@gmail.com</td>
              <td>0788422208</td>
              <td>123456789</td>
              <td className="d-flex fex-row gap-2">
                <button type="button" className="btn btn-primary">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Anne</td>
              <td>Bethiane</td>
              <td>ubethiane07@gmail.com</td>
              <td>0788422208</td>
              <td>123456789</td>
              <td className="d-flex fex-row gap-2">
                <button type="button" className="btn btn-primary">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Anne</td>
              <td>Bethiane</td>
              <td>ubethiane07@gmail.com</td>
              <td>0788422208</td>
              <td>123456789</td>
              <td className="d-flex fex-row gap-2">
                <button type="button" className="btn btn-primary">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div >

     
    )
}