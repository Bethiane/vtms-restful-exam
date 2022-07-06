import React from "react";
const VehicleContext = React.createContext({
  vehicle: null,
  setVehicle: (_vehicle) => {},
  logout: () => {},
});

export default VehicleContext;
