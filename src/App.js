import './App.css';
import { increment, decrement } from './actions/action';
import { useSelector, useDispatch } from 'react-redux';
import ToDoApp from  './pages/todoApp/todoApp';
const App=()=>{
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <div className="app">
      <ToDoApp/>
      {/* <p>Counter Value: {count}</p>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button> */}
    </div>
  );
}

export default App;
