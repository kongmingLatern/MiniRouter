import React from 'react';
import { NavigationContext } from "../Context"

export default function useLocation() {
  const { location } = React.useContext(NavigationContext)
  // {pathname: "/", search: "", hash: "", state: null, key: "default"}
  return location
};
