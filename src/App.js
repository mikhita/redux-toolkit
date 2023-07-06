import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'


const App = () => {
  return (
    <div>
      <Filter/>
      <AnecdoteList/>
      <h2>create new</h2>
      <NewAnecdote/>
    </div>
  )
}

export default App

