import { combineReducers } from 'redux'
import filterReducer from './filterReducer'

export const getId = () => (100000 * Math.random()).toFixed(0)

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

export const anecdoteRreducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.payload]
    case 'VOTE':
      const id = action.payload.id
      const anecdoteToVote = state.find(a => a.id === id)
      const changedAnecdote = { 
        ...anecdoteToVote, 
        votes: anecdoteToVote.votes + 1 
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote 
      )
    default:
      return state
    }
}

const rootReducer = combineReducers({
  anecdotes: anecdoteRreducer,
  filter: filterReducer
})

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    payload: {
      content,
      votes: 0,
      id: getId()
    }
  }
}

export const vote = (id) => {
  return {
    type: 'VOTE',
    payload: { id }
  }
}  

export default rootReducer