import React from 'react';
import { NavigationContext } from "../Context"

export default function useLocation() {
  const { location } = React.useContext(NavigationContext)
  return location
};
