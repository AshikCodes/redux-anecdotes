import { useSelector, useDispatch, connect } from 'react-redux'
import { filterList } from '../reducers/filterReducer'

const Filter = (props) => {
    const filtered = props.filter

    const handleChange = (event) => {
      props.filterList(event.target.value)

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

  const mapStateToProps = (state) => {
    return {
      filter: state.filter
    }
  }

  const mapDispatchToProps = {
    filterList
  }
  
  const ConnectedFilter = connect(mapStateToProps,mapDispatchToProps)(Filter)

  export default ConnectedFilter
  // export default Filter