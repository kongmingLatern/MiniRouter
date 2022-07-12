import React from 'react'
import { createBrowserHistory } from "history";
import Router from "./Router";

export default function BrowserRouter({ children }) {
  // 组件卸载之前
  let historyRef = React.useRef(null)

  if (historyRef.current === null) {
    historyRef.current = createBrowserHistory()
  }

  const history = historyRef.current

  return <Router children={children} navigator={history} />
};