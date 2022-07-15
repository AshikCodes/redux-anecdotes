import { useSelector, useDispatch } from 'react-redux'
import { filterList } from '../reducers/filterReducer'

const Filter = () => {
    const filtered = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const handleChange = (event) => {
      // input-field value is in variable event.target.value    
      dispatch(filterList(event.target.value))

    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter