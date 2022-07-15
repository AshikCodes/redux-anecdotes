import { createSlice } from '@reduxjs/toolkit'

const filterAtStart = ['']

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterAtStart,
    reducers: {
        filterList(state,action){
            const filterLetters = action.payload
            state[0] = filterLetters
            console.log(`filter letters are ${state[0]}`)
        }
    }
})

export default filterSlice.reducer
export const { filterList } = filterSlice.actions