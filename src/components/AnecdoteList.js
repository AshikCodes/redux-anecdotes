import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { addNotiForVoteClk,removeNotiForVoteClk, setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    var filteredAnecs = []

    if(filter[0] !== ''){
        console.log('got it')
        for(let i = 0; i < anecdotes.length; i++){
            if(anecdotes[i].content.startsWith(filter[0])){
                console.log(`MATCH: ${anecdotes[i].content}`)
                filteredAnecs.push(anecdotes[i])
                console.log(`filteredAnecs here is ${JSON.stringify(filteredAnecs)}`)
            }
        }
    }
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(addVote(anecdote))
        dispatch(setNotification(`you voted ${anecdote.content}`,10))
      }

    return ( 
        <div className="anec-list">
                {filter[0] == '' ? anecdotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>votes</button>
            </div>
            </div>
        ) : filteredAnecs.map(filteredAnec => 
            <div key={filteredAnec.id}>
                <div>
                    {filteredAnec.content}
                </div>
                <div>
                    has {filteredAnec.votes}
                    <button onClick={() => vote(filteredAnec.id, filteredAnec.content)}>votes</button>
                </div>
            </div>
        ) }
        </div>
     );
}
 
export default AnecdoteList;