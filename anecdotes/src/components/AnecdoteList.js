import React from 'react'
import { connect } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Anecdote from './Anecdote'

const AnecdoteList = (props) => {
  // const dispatch = useDispatch()

  const handleOnVoteClick = (anecdote) => {
    props.voteForAnecdote(anecdote.id)
    props.setNotification(`you voted for '${anecdote.content}'`, 5)
  }

  const anecdotesToShow = () => {
    return props.anecdotes
    .filter(anecdote => anecdote.content.toLowerCase().includes(props.filter))
    .sort((a, b) => b.votes - a.votes)
  }

  return (
    <ul>
       {anecdotesToShow().map(anecdote =>
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => handleOnVoteClick(anecdote)} />
        )}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  voteForAnecdote,
  setNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
