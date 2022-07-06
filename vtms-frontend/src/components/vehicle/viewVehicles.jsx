export default function ViewVehicles() {

    return (
        <div>
            <button type="button" className="btn bg-app-primary bg-text-color ">
              Add Vehicle
            </button>
        
        <table className="table table-hover table-bordered mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Model</th>
              <th scope="col">VIN</th>
              <th scope="col">Engine</th>
              <th scope="col">Color</th>
              <th scope="col">Plate Number</th>
              <th scope="col">Owner</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>BMW</td>
              <td>12345</td>
              <td>Motor</td>
              <td>Black</td>
              <td>RAB 1267Z</td>
              <td>Anne Bethiane</td>
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
              <td>BMW</td>
              <td>12345</td>
              <td>Motor</td>
              <td>Black</td>
              <td>RAB 1267Z</td>
              <td>Anne Bethiane</td>
              <td className="d-flex fex-row gap-2">
                <button type="button" className="btn btn-primary">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr> <tr>
              <th scope="row">1</th>
              <td>BMW</td>
              <td>12345</td>
              <td>Motor</td>
              <td>Black</td>
              <td>RAB 1267Z</td>
              <td>Anne Bethiane</td>
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