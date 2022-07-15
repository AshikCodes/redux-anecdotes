import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { addNotiForVoteClk,removeNotiForVoteClk } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const vote = (id, anec) => {
        console.log('vote', id)
        dispatch(addVote(id))
        dispatch(addNotiForVoteClk(anec))
        setTimeout(() => {
            dispatch(removeNotiForVoteClk())
        },5000)
      }

    return ( 
        <div className="anec-list">
                {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id, anecdote.content)}>votes</button>
            </div>
            </div>
        )}
        </div>
     );
}
 
export default AnecdoteList;