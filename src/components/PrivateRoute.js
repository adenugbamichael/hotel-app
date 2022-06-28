import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const PrivateRoute = ({ ...rest }) => {
  const { auth } = useSelector((state) => ({ ...state }))

  return auth && auth.token ? <Outlet {...rest} /> : <Navigate to='/login' />
}

export default PrivateRoute
