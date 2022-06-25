import { useSelector, useDispatch } from 'react-redux'
import { addVote, addAnec } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(addVote(id))
  }

  const addNewAnec = (event) => {
    event.preventDefault()
    const anec = event.target.anec.value
    event.target.anec.value = ''
    dispatch(addAnec(anec))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>votes</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addNewAnec}>
        <div><input name='anec'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App