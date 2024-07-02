import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slice/counter";
import MyComp from "./MyComp";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Learning about redux toolkit.</h1>
      <h2>Count is {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <MyComp />
    </>
  );
}

export default App;
