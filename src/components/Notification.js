import { useSelector } from 'react-redux'
import { connect } from 'react-redux'

const Notification = (props) => {
  // const notification = useSelector(state => state.notifications)
  const notification = props.notifications
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

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification
// export default Notification