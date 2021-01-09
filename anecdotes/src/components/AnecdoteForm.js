import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setCreateNotification, removeNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
  
    const anecdoteContent = event.target.anecdote.value
    event.target.anecdote.value = ''

    const newAnecdote = await anecdoteService.createNew(anecdoteContent)
    dispatch(createAnecdote(newAnecdote))
    dispatch(setCreateNotification(anecdoteContent))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }

  return (
    <>
      <h2>Create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">add</button>
      </form>
    </>
  )
}

export default AnecdoteForm
