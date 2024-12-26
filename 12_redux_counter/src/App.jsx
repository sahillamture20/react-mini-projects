import { useDispatch, useSelector } from "react-redux"
import ReduxCounter from './component/ReduxCounter'
function App() { 
 const dispatch = useDispatch();
 const count = useSelector(state => state)
  return (
    <>
    <div>
      <h1>Counter using Redux</h1>
      <h2>Count is {count}</h2>
      <button onClick={(e) => dispatch({type: 'INCREMENT'})}>Increment</button>
      <button onClick={(e) => dispatch({type: 'DECREMENT'})}>Decrement</button>
      <ReduxCounter />
    </div>
    </>
  )
}

export default App
