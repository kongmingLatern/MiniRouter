import React from "react"

export function createRoutesFromChildren(children) {
  const routes = []

  React.Children.forEach(children, child => {
    const route = {
      element: child.props.element,
      path: child.props.path
    }
    routes.push(route)
  })

  return routes
}