import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notifications)
  console.log("notification is ", notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  //
  return (
    <div style={style}>
      {notification[0].content}
    </div>
  )
}

export default Notification