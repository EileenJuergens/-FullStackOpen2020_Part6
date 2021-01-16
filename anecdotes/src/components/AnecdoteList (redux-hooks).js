import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Anecdote from './Anecdote'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const currentFilter = useSelector(state => state.filter)

  const handleOnVoteClick = (anecdote) => {
    dispatch(voteForAnecdote(anecdote.id))
    dispatch(setNotification(`you voted for '${anecdote.content}'`, 5))
  }

  return (
    <ul>
      {anecdotes
        .filter(anecdote => anecdote.content.toLowerCase().includes(currentFilter))
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote =>
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => handleOnVoteClick(anecdote)} />
        )}
    </ul>
  )
}

export default AnecdoteList;
