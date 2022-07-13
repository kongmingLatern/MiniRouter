import React from "react";
import { RouteContext } from "../Context";

export default function useOutlet() {
  // 渲染 children
  const { outlet } = React.useContext(RouteContext)
  console.log(outlet);
  return outlet
};
