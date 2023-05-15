import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCard } from '../cards.slice'
import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'

const AddCardForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formInputs, setFormInputs] = useState({
    title: '',
    description: '',
  })

  const inputChangeHandler = (e) => {
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.id]: e.target.value,
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addCard({ ...formInputs, id: nanoid() }))
    navigate('/')
  }

  return (
    <main>
      <form id='login-form' onSubmit={submitHandler}>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            value={formInputs.title}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            id='description'
            value={formInputs.description}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <input type='submit' value='Add Card' />
      </form>
    </main>
  )
}
export default AddCardForm
