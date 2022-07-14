import React from 'react';
import { RouteContext } from "../Context";

export default function useParams() {
  const { matches } = React.useContext(RouteContext)

  const routeMatch = matches[matches.length - 1]

  return routeMatch ? routeMatch.params : {}
}
