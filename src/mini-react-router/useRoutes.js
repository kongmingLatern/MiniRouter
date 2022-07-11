export default function useRoutes(routes) {
  const pathName = window.location.pathname

  return routes.map(route => {

    const match = pathName === route.path || pathName === '/' + route.path
    return match ? route.element : null
  })
};
