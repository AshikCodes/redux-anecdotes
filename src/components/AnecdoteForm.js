import {  addAnec } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'

import anecService from '../services/anecdote'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteForm = (props) => {
    const anecdotes = props.anecdotes

    const addNewAnec = async (event) => {
        event.preventDefault()
        const anec = event.target.anec.value
        event.target.anec.value = ''
        props.addAnec(anec)
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes
    }
}

const mapDispatchToProps = {
    addAnec
}

const ConnectedAnecdoteForm = connect(mapStateToProps,mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm;