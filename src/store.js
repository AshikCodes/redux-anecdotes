import reducer from './reducers/anecdoteReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        anecdotes: reducer
    }
})

console.log("STORE IS ", store.getState())

export default store