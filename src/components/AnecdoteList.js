import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  // const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    const filter = state.filter;
    const filteredAnecdotes = state.anecdotes.filter(anecdote =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    );
    const sortedAnecdotes = filteredAnecdotes.sort((a, b) => b.votes - a.votes);
    return sortedAnecdotes;
  });
  
  
  // const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);

  

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => (
      <div key={anecdote.id}>
        <div>{anecdote.content}</div>
        <div>
          has {anecdote.votes}
          <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
        </div>
      </div>
    ))}
    </div>
  )
}

export default AnecdoteList



