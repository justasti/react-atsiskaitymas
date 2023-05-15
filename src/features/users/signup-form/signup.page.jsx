import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../users.slice'
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { users } = useSelector((state) => state.users)

  const [errorMessages, setErrorMessages] = useState([])
  const [formInputs, setFormInputs] = useState({
    email: '',
    password: '',
    confirm: '',
  })

  const inputChangeHandler = (e) => {
    setErrorMessages([])
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.id]: e.target.value,
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const hasErrors =
      formInputs.password !== formInputs.confirm ||
      users.map((u) => u.email).includes(formInputs.email)
    setErrorMessages([])
    if (hasErrors) {
      if (formInputs.password !== formInputs.confirm) {
        setErrorMessages((prevMessages) => [
          ...prevMessages,
          'Passwords does not match',
        ])
      }
      if (users.map((u) => u.email).includes(formInputs.email)) {
        setErrorMessages((prevMessages) => [
          ...prevMessages,
          'User with this email address already exists',
        ])
      }
    } else {
      dispatch(addUser({ ...formInputs, id: nanoid() }))
      navigate('/')
    }
  }

  return (
    <main>
      <form id='signup-form' onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input
            type='text'
            id='email'
            value={formInputs.email}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={formInputs.password}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label htmlFor='confirm'>Confirm password</label>
          <input
            type='password'
            id='confirm'
            value={formInputs.confirm}
            onChange={inputChangeHandler}
          />
        </div>
        <input type='submit' value='Create Account' />
      </form>
      {errorMessages.length
        ? errorMessages.map((m) => <p key={m}>{m}</p>)
        : null}
    </main>
  )
}
export default SignupPage
