import React from "react"
import { NavigationContext } from "../Context"

export default function useNavigate() {
  // 跳转
  const { navigator } = React.useContext(NavigationContext)

  const navigate = (to, options = {}) => {
    (!!options.replace ? navigator.replace : navigate.push)(to, options.state)
  }

  return navigate
};