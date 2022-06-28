import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const TopNav = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector((state) => ({ ...state }))
  const navigate = useNavigate()

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    })
    window.localStorage.removeItem("auth")
    navigate("/login")
  }

  return (
    <div className='nav bg-light d-flex justify-content-between'>
      <Link className='nav-link' to='/'>
        <span className='h3 logo'>yottar</span>
      </Link>

      {auth !== null && (
        <div className='d-flex'>
          <Link className='nav-link navcolor' to='/dashboard'>
            Dashboard
          </Link>

          <a className='nav-link pointer navcolor' onClick={logout}>
            Logout
          </a>
        </div>
      )}
      {auth === null && (
        <>
          <div className='d-flex'>
            <Link className='nav-link navcolor' to='/login'>
              Login
            </Link>
            <Link className='nav-link navcolor' to='/register'>
              Register
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default TopNav
