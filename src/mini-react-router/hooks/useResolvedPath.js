import { useMemo } from "react"
export default function useResolvedPath(to) {
  return useMemo(() => {
    return {
      pathname: to,
      hash: '',
      search: ''
    }
  }, [to])
};
