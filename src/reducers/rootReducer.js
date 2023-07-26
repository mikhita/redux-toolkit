import { combineReducers } from 'redux'
import filterReducer from './filterReducer'
import { anecdoteRreducer } from './anecdoteReducer'



const rootReducer = combineReducers({
  anecdotes: anecdoteRreducer,
  filter: filterReducer
})


export default rootReducer