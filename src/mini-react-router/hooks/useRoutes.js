export default function useRoutes(routes) {
  /* 
  routes
   [{...}]
    children: [{...}, {...}]
    element: {$$typeof:symbol(react.element)}
    path: '/' 
  */
  // console.log(routes);
  const pathName = window.location.pathname

  return routes.map(route => {
    // const match = pathName === route.path || pathName === '/' + route.path
    // console.log('route map 遍历', route);
    // 匹配父路由
    const match = pathName.startsWith(route.path)

    // console.log('route', pathName, route);

    return match ? route.element : null
  })
};
