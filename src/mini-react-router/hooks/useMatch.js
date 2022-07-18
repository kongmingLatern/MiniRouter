import { matchPath } from 'react-router-dom';
import useLocation from './useLocation';
import React from 'react';
export default function useMatch(pattern) {
  const { pathname } = useLocation()
  return React.useMemo(() => {
    matchPath(pattern, pathname)
  }, [pattern, pathname])
};
