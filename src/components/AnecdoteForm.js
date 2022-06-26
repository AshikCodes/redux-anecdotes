import {  addAnec } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteForm = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    const addNewAnec = (event) => {
        event.preventDefault()
        const anec = event.target.anec.value
        event.target.anec.value = ''
        dispatch(addAnec(anec))
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