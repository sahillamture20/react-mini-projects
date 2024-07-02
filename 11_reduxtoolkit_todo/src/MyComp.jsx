import { useSelector} from 'react-redux'

function MyComp() {
  const count = useSelector((state) => state.counter)

  return (
    <div>MyComp : {count}</div>
  )
}

export default MyComp;