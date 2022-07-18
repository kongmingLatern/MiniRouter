import { matchPath } from 'react-router-dom';
import useLocation from './useLocation';
export default function useMatch(pattern) {
  const { pathname } = useLocation()
  return matchPath(pattern, pathname)
};
