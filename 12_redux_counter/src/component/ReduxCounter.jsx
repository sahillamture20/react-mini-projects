/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux'
function MyComp() {
  const count = useSelector(state => state)
  return (
    <>
    <div>MyComp from Redux : {count}</div>
    </>
  )
}

export default MyComp;