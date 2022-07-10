import { createSlice } from '@reduxjs/toolkit'

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

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes', 
  initialState,
  reducers: {
    addVote(state, action){
      const id = action.payload
      const anecToUpdate = state.find(n => n.id === id)
      console.log('anecToUpdate is', anecToUpdate)
      const updatedAnec = {
        ...anecToUpdate,
        votes: anecToUpdate.votes + 1
      }
      console.log('updatedAnec is', updatedAnec)
      for(let i = 0; i < state.length; i++){
        if(state[i].id === id){
          state[i] = updatedAnec
        }
      }
      state.sort((a,b) => parseInt(b.votes) - parseInt(a.votes))
      return state
    },
    addAnec(state,action){
      console.log('action.data is', action.payload)
      const content = action.payload
      state.push({
        content,
        id: getId(),
        votes: 0
      })
      return state
    }
  }
})

export default anecdoteSlice.reducer
export const { addAnec, addVote } = anecdoteSlice.actions