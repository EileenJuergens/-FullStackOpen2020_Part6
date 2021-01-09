import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

// Get all anecdotes
const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getId = () => (100000 * Math.random()).toFixed(0)

// Post new anecdote
const createNew = async (content) => {
  const object = {
    content,
    id: getId(),
    votes: 0
  }
  const response = await axios.post(baseUrl, object)
  return response.data
}

// Update vote of specific anecdote
const updateVote = async (id) => {
  const allAnecdotes = await axios.get(baseUrl)
  const anecdote = allAnecdotes.data.find(anecdote => anecdote.id === id)

  const anecdoteObject = {
    ...anecdote,
    votes: anecdote.votes+1
  }

  const response = axios.put(`${baseUrl}/${id}`, anecdoteObject)
  return response.data
}

export default { getAll, createNew, updateVote }
