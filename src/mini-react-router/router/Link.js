import { useNavigate } from "../hooks";
export default function Link({ to, children }) {
  // 返回了一个 xxx.push 方法
  const navigate = useNavigate()
  const handle = (e) => {
    e.preventDefault();
    // 跳转
    navigate(to)
  }
  return (
    <a href={to} onClick={handle}>
      {children}
    </a>
  )
};
