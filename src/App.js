import { Outlet, useParams } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* 首页 */}
            <Route index element={<Home />} />
            {/* 商品路由 */}
            <Route path="product" element={<Product />}>
              {/* 动态路由 */}
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            {/* 404 */}
            <Route path="*" element={<NoMatch />}>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

function Layout() {
  return (
    <>
      <h1>Layout</h1>
      <Link to="/" style={{ "marginRight": "20px" }}>首页</Link>
      <Link to="/product">商品</Link>
      <Outlet />
    </>
  )
}

function Home() {
  return (
    <>
      <h1>Home</h1>
    </>
  )
}
function Product() {
  return (
    <>
      <h1>Product</h1>
      <Link to="/product/123" style={{ "marginRight": "20px" }}>查看商品123</Link>
      <Link to="/product/1234444">查看商品1234444</Link>
      <Outlet />
    </>
  )
}
function ProductDetail() {
  const params = useParams()
  return (
    <>
      <h1>ProductDetail</h1>
      <h2>{params.id}</h2>
    </>
  )
}

function NoMatch() {
  return (
    <>
      <h1>404</h1>
    </>
  )
}