import { useDispatch, useSelector } from "react-redux";
import { actions } from "./Store/Store";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const add42 = () => {
    dispatch(actions.add42(42));
  };
  return (
    <div>
      <h2>Counter Demo</h2>
      <p>{counter}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => add42()}>Add 42</button>
    </div>
  );
}
export default Counter;
