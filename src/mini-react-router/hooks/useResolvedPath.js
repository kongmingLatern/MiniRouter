export default function useResolvedPath(to) {
  return {
    pathname: to,
    hash: '',
    search: ''
  }
};
