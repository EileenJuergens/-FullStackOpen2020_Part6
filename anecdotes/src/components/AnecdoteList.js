import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { setVoteNotification, removeNotification } from '../reducers/notificationReducer'
import Anecdote from './Anecdote'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)

  const handleOnVoteClick = (anecdote) => {
      dispatch(voteForAnecdote(anecdote.id))
      dispatch(setVoteNotification(anecdote))
      setTimeout(() => {
        dispatch(removeNotification())
      }, 5000)
  }

  return (
    <ul>
      {anecdotes.sort((a,b) => b.votes - a.votes).map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => handleOnVoteClick(anecdote)} />
      )}
    </ul>
  )
}

export default AnecdoteList;
