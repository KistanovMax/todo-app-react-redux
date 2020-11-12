import React from 'react'
import './TodoForm.css'

export default function TodoForm() {
  return (
    <form>
      <input type='text' placeholder='New task' />
      <button type='submit'>Submit</button>
    </form>
  )
}
