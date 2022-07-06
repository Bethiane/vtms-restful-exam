import React from "react";
const UserContext = React.createContext({
  user: null,
  setUser: (_user) => {},
  logout: () => {},
});

export default UserContext;
