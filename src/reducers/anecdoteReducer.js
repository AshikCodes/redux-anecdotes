const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

export const addVote = (id) => {

  return {
    type: 'INCREMENT_VOTE',
    data: { id }
  }
}

export const addAnec = (content) => {
  return {
    type: 'ADD_ANEC',
    data: { 
      content: content,
      id: getId(),
      votes: 0
     }
  }
}
const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {

  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'INCREMENT_VOTE':
      const id = action.data.id
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
      return state.map((anecdote) => 
        anecdote.id !== id ? anecdote : updatedAnec
      )
      case 'ADD_ANEC':
        console.log('action.data is', action.data)
        state.sort((a,b) => parseInt(b.votes) - parseInt(a.votes))
        return [...state, action.data]
      default: 
        return state
  }
}

export default reducer