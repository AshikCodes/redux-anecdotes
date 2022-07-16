import { createSlice } from '@reduxjs/toolkit'

const notificationsAtStart = ['']

const asObject = (notification) => {

    return {
      content: notification
    }
  }

const initialState = notificationsAtStart.map(asObject)
var notiMsg;

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers:{
        addNotiForVoteClk(state,action){
            // const anecClicked = action.payload
            // var msg = `you voted '${anecClicked}'`
            const msg = action.payload
            state[0].content = msg
        },   
        removeNotiForVoteClk(state,action){
            state[0].content = ''
        }
    }   
})

export const {addNotiForVoteClk,removeNotiForVoteClk} = notificationSlice.actions

export const setNotification = (msg, delay) => {
    return async (dispatch) => {
        dispatch(addNotiForVoteClk(msg))
        setTimeout(() => {
            dispatch(removeNotiForVoteClk())
        },delay * 1000)
    }
}
export default notificationSlice.reducer
