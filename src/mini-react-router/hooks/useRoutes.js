// import { Outlet } from "react-router-dom"
// import { normalizePathname } from "../utils"
import { RouteContext } from "../Context"
import { Outlet } from "../router"
import useLocation from "./useLocation"
import { matchRoutes } from "react-router-dom"
// import { renderMatches } from "react-router-dom"
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
  const matches = matchRoutes(routes, { pathName })

  return renderMatches(matches)
  // return routes.map(route => {
  //   // const match = pathName === route.path || pathName === '/' + route.path
  //   // console.log('route map 遍历', route);
  //   console.log('useRoutes 子路由');
  //   // 匹配父路由
  //   const match = pathName.startsWith(route.path)

  //   // console.log('route', pathName, route);

  //   // console.log('routeContext', RouteContext);
  //   return match &&
  //     route.children.map(child => {
  //       let m = normalizePathname(child.path || '/') === pathName
  //       return (
  //         m && (
  //           <RouteContext.Provider
  //             value={
  //               { outlet: child.element }
  //             }
  //             children={
  //               route.element !== undefined
  //                 ? route.element
  //                 : <Outlet />
  //             } />
  //         )

  //       )
  //     })
  // })
};

function renderMatches(matches) {
  console.log('matches', matches);
  if (matches === null) {
    return null
  }

  return matches.reduceRight((outlet, match) => {
    return (
      <RouteContext.Provider
        value={{ outlet, matches }}
        children={match.route.element || outlet}
      />
    )
  }, null)
}