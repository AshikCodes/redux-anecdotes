import { useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import anecService from './services/anecdote'
import { setAnecs } from './reducers/anecdoteReducer'
import { useEffect } from 'react'

const App = () => {
const dispatch = useDispatch()

useEffect(() => {
  anecService.getAll().then((anecdotes) => {
    dispatch(setAnecs(anecdotes))
  })
}, [dispatch])


  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App