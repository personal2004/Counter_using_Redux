import './App.css';
import { increment, decrement } from './actions/counterAction';
import { useSelector, useDispatch } from 'react-redux';

const App=()=>{
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <div className="app">
      <p>Counter Value: {count}</p>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
