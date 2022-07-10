import { createSlice } from '@reduxjs/toolkit'

const notificationsAtStart = ['esfweefew']

const asObject = (notification) => {

    return {
      content: notification
    }
  }

const initialState = notificationsAtStart.map(asObject)

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
})

export default notificationSlice.reducer
