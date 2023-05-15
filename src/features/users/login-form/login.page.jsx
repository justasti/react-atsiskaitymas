import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../users.slice'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { users } = useSelector((state) => state.users)

  const [failedAttempt, setFailedAttempt] = useState(false)
  const [formInputs, setFormInputs] = useState({
    email: '',
    password: '',
  })

  const inputChangeHandler = (e) => {
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.id]: e.target.value,
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const existingUser = users.find((u) => u.email === formInputs.email)
    if (existingUser && existingUser.password === formInputs.password) {
      setFailedAttempt(false)
      dispatch(loginUser(existingUser))
      navigate('/')
    } else {
      setFailedAttempt(true)
    }
  }

  return (
    <main>
      <form id='login-form' onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            id='email'
            value={formInputs.email}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={formInputs.password}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <input type='submit' value='Log In' />
        {failedAttempt && (
          <p className='error-msg'>Incorrect username or password</p>
        )}
      </form>
    </main>
  )
}
export default LoginPage
