import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <img
        src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png'
        alt='logo img'
      />
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/add'>Add Card</Link>
        </li>
      </ul>
      <div className='buttons_container'>
        <Link to='/login'>
          <button>Log In</button>
        </Link>
        <Link to='/signup'>
          <button>Sign Up</button>
        </Link>
      </div>
    </header>
  )
}
export default Header
