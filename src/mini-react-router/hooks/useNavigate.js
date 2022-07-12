import React from "react"
import { NavigationContext } from "../Context"

export default function useNavigate() {
  // 跳转
  const { navigator } = React.useContext(NavigationContext)

  return navigator.push
};