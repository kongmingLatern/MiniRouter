import React from "react"
export default function useResolvedPath(to) {
  return React.useMemo(
    () => ({
      pathname: to,
      hash: "",
      search: "",
    }),
    [to]
  )
};
