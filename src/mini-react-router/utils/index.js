// 如 ///product/detail/// -> /product/detail
export const normalizePathname = (pathname) => {
  return pathname.replace(/\/+$/, "").replace(/^\/*/, "/")
}
