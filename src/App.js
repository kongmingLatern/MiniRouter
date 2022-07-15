// import { Outlet } from "react-router-dom"
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
// export default function App() {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             {/* 首页 */}
//             <Route index element={<Home />} />
//             {/* 商品路由 */}
//             <Route path="product" element={<Product />} />
//             {/* 动态路由
//               <Route path=":id" element={<ProductDetail />} />
//             </Route>
//             {/* 404 */}
//             {/* <Route path="*" element={<NoMatch />}>
//               </Route> */}
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   )
// }
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "./mini-react-router/router"
import { useNavigate, useParams } from "./mini-react-router/hooks"
import { AuthProvider } from "./mini-react-router/Login/auth"
export default function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="product" element={<Product />} >
                <Route path=":id" element={<ProductDetail />} />
              </Route>
              <Route path="user" element={<User />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  )
}

function Layout() {
  return (
    <>
      <h1>Layout</h1>
      <Link to="/">首页</Link>
      <br />
      <Link to="/product">商品</Link>
      <br />
      <Link to="/user">用户中心</Link>
      <br />
      <Link to="/Login">登录</Link>
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
      {/* <Link to="123">跳转详情页</Link> */}
      <Link to="/product/123">查看商品123</Link>
      {/* <Link to="/product/1234444">查看商品1234444</Link> */}
      <Outlet />
    </>
  )
}
function ProductDetail() {
  const params = useParams()
  const navigate = useNavigate()
  return (
    <>
      <h1>ProductDetail</h1>
      <h2>{params.id}</h2>
      <button onClick={() => navigate("/")}>go Home</button>
    </>
  )
}

function User() {
  return (
    <div>
      <h1>User</h1>
    </div>
  )
}
function Login() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}
function NoMatch() {
  return (
    <div>
      <h1>404</h1>
    </div>
  )
}
