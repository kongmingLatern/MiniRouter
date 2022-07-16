import React, { useCallback } from "react"
import { NavigationContext } from "../Context"

export default function useNavigate() {
  // 跳转
  const { navigator } = React.useContext(NavigationContext)

  const navigate = useCallback((to, options = {}) => {
    if (typeof to === 'number') {
      navigator.go(to)
      return
    }
    (!!options.replace ? navigator.replace : navigator.push)(to, options.state)
  }, [navigator])

  return navigate
};