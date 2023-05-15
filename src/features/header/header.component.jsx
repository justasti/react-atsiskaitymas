import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../users/users.slice'

const Header = () => {
  const dispatch = useDispatch()
  const { authUser } = useSelector((state) => state.users)
  return (
    <header>
      <Link to='/'>
        <img
          src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png'
          alt='logo img'
        />
      </Link>
      {authUser && (
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/add'>Add Card</Link>
          </li>
        </ul>
      )}
      <div className='buttons_container'>
        {!authUser ? (
          <>
            <Link to='/login'>
              <button>Log In</button>
            </Link>
            <Link to='/signup'>
              <button>Sign Up</button>
            </Link>
          </>
        ) : (
          <>
            <p>{authUser?.email}</p>
            <button onClick={() => dispatch(logoutUser())}>Sign Out</button>
          </>
        )}
      </div>
    </header>
  )
}
export default Header
