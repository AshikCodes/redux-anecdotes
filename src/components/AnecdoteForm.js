import {  addAnec } from '../reducers/anecdoteReducer'
// import { addAnec } 
import anecService from '../services/anecdote'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteForm = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const addNewAnec = async (event) => {
        event.preventDefault()
        const anec = event.target.anec.value
        event.target.anec.value = ''
        const newAnec = await anecService.createNew(anec)
        dispatch(addAnec(newAnec))
      }
    return ( 
        <div className="anec-form">
         <h2>create new</h2>
            <form onSubmit={addNewAnec}>
                <div><input name='anec'/></div>
                <button type='submit'>create</button>
            </form>
        </div>
     );
}
 
export default AnecdoteForm;