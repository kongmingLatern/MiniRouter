// import { Outlet } from "react-router-dom"
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Outlet,
//   Navigate,
//   useNavigate,
//   useParams,
//   useLocation
// } from "react-router-dom"
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
import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate } from "./mini-react-router/router"
import { useLocation, useNavigate, useParams } from "./mini-react-router/hooks"
import { AuthProvider } from "./mini-react-router/Login/auth"
import useAuth from './mini-react-router/hooks/useAuth';
import About from "./mini-react-router/pages/About";
// import useLocation from './mini-react-router/hooks/useLocation';
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
              <Route path="user" element={
                <RequireAuth>
                  <User />
                </RequireAuth>
              }
              />
              <Route path="login" element={<Login />} />
              <Route path="about" element={<About />} />
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
      <br />
      <Link to="/about">关于</Link>
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

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  return children;
}


function User() {
  const auth = useAuth()
  const navigate = useNavigate()
  return (
    <div>
      <h1>User</h1>
      <p>{auth.user}</p>
      <button onClick={() => {
        auth.signout(() => navigate('/')
        )
      }}>
        退出登录
      </button>
    </div>
  )
}
function Login() {
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  if (auth.user) {
    return <Navigate to={from} />
  }

  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let newUser = formData.get("username");

    auth.signin(newUser, () => {
      navigate(from, { replace: true });
    });
  }
  // const submit = (e) => {
  //   e.preventDefault();
  //   const formDate = new FormData(e.currentTarget)
  //   const newUser = formDate.get('username')
  //   console.log('newUser', newUser);
  //   auth.signin(newUser, () => {
  //     navigate(from, { replace: true })
  //   })
  // }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">login</button>
      </form> */}
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
