import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByValue } from "./redux/CounterSlice";
import { login } from "./redux/UserSlice";
export default function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const { name, email, isLogin } = useSelector((state) => state.user);
  return (
    <div className="App">
      <h3> Count : {count}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByValue(100))}>
        increment By 100
      </button>
      <br />
      <br />
      <div className="user">
        <h4>Log in Information</h4>
        {isLogin ? (
          <div className="details">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <button onClick={() => dispatch(login())}>Log out</button>
          </div>
        ) : (
          <div>
            <p>Please Login for the Information</p>
            <button onClick={() => dispatch(login())}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
}
