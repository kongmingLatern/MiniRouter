import { Outlet } from "react-router-dom"
import { RouteContext } from "../Context"
import { normalizePathname } from "../utils"
import useLocation from "./useLocation"
export default function useRoutes(routes) {
  /* 
  routes
   [{...}]
    children: [{...}, {...}]
    element: {$$typeof:symbol(react.element)}
    path: '/' 
  */
  const location = useLocation()
  console.log('useRoutes');
  console.log(location);
  // console.log(routes);
  const pathName = location.pathname
  // console.log('pathName', pathName);

  return routes.map(route => {
    // const match = pathName === route.path || pathName === '/' + route.path
    // console.log('route map 遍历', route);
    console.log('useRoutes 子路由');
    // 匹配父路由
    const match = pathName.startsWith(route.path)

    // console.log('route', pathName, route);

    // console.log('routeContext', RouteContext);
    return match &&
      route.children.map(child => {
        let m = normalizePathname(child.path || '/') === pathName
        return (
          m && (
            <RouteContext.Provider
              value={
                { outlet: child.element }
              }
              children={
                route.element !== undefined
                  ? route.element
                  : <Outlet />
              } />
          )

        )
      })
  })
};
