import { useEffect } from 'react';
import { useNavigate } from './../hooks';
export default function Navigate({ to, state, replace }) {
  let navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  })
  return null
}
