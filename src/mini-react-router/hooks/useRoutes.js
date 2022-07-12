export default function useRoutes(routes) {
  const pathName = window.location.pathname

  return routes.map(route => {
    // const match = pathName === route.path || pathName === '/' + route.path
    const match = pathName.startsWith(route.path)

    console.log('route', pathName, route);

    return match ? route.element : null
  })
};
