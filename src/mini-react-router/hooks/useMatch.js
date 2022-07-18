import { matchPath } from 'react-router-dom';
import useLocation from './useLocation';
import React from 'react';
export default function useMatch(pattern) {
  let { pathname } = useLocation();
  return React.useMemo(() =>
    matchPath(pattern, pathname),
    [pathname, pattern]
  );
}