import { Outlet } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="product" element={<Product />}></Route>
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
    </>
  )
}