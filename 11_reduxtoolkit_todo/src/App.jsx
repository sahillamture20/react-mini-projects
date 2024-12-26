/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slice/counter";
import MyComp from "./component/MyComp";


function App() {
  const countrtk = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Counter using Redux Toolkit (RTK).</h1>
        <h2>Count from RTK is {countrtk}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <MyComp />
      </div>
    </>
  );
}

export default App;
