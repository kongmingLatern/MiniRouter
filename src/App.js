import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  )
}


function Home() {
  return (
    <h1>Home</h1>
  )
}
function Product() {
  return (
    <h1>Product</h1>
  )
}