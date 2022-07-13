import React, { useState, useLayoutEffect } from 'react'
import { createBrowserHistory } from "history";
import Router from "./Router";

export default function BrowserRouter({ children }) {

  let historyRef = React.useRef(null)

  if (historyRef.current === null) {
    historyRef.current = createBrowserHistory()
  }

  const history = historyRef.current

  const [state, setstate] = useState({
    location: history.location
  })

  useLayoutEffect(() => {
    history.listen(setstate)
  }, [history])


  return <Router children={children} navigator={history} location={state} />
};