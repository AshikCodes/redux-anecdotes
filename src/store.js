import anecdoteReducer from './reducers/anecdoteReducer'
import notificationSlice from './reducers/notificationReducer'
import filterSlice from './reducers/filterReducer'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

const combinedReducer = combineReducers({
    anecdotes: anecdoteReducer,
    notifications: notificationSlice,
    filter: filterSlice
})
// const store = configureStore({
//     reducer: {
//         anecdotes: reducer
//     }
// })
const store = configureStore({reducer: combinedReducer})

console.log("STORE IS ", store.getState())

export default store