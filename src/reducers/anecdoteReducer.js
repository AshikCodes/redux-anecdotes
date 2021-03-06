import { createSlice } from '@reduxjs/toolkit'
import anecService from '../services/anecdote'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes', 
  initialState: [],
  reducers: {
    orderedAnecs(state,action) {
      const updatedAnec = action.payload
      console.log(`UPDATED ANEC HERE IS ${updatedAnec}`)
        for(let i = 0; i < state.length; i++){
          if(state[i].id === updatedAnec.id){
              state[i] = updatedAnec
            }
        }
      state.sort((a,b) => parseInt(b.votes) - parseInt(a.votes))
      return state
    },
    appendAnec(state,action) {
      state.push(action.payload)
    },
    setAnecs(state,action){
      return action.payload
    }
  }
})

export const { orderedAnecs, appendAnec, setAnecs } = anecdoteSlice.actions

export const initializeAnecs = () => {
  return async (dispatch) => {
    const anecs = await anecService.getAll()
    const sortedAnecs = anecs.sort((a,b) => parseFloat(b.votes) - parseFloat(a.votes))
    dispatch(setAnecs(sortedAnecs))
  }
}

export const addVote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnec = await anecService.incrementVote(anecdote)
    console.log(`updatedAnec is ${updatedAnec}`)
    dispatch(orderedAnecs(updatedAnec))
  }
}

//added addAnec using async action creator
export const addAnec = (content) => {
  return async (dispatch) => {
    const newAnec = await anecService.createNew(content)
    dispatch(appendAnec(newAnec))
  }
}
export default anecdoteSlice.reducer
