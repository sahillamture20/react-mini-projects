/* eslint-disable no-unused-vars */
import { useSelector} from 'react-redux'

function MyComp() {
  const countrtk = useSelector((state) => state.counter)

  return (
    <>
    <div>MyComp from RTK : {countrtk}</div>
    </>
  )
}

export default MyComp;