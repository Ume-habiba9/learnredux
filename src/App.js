import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './reduce/action'
import { add , del } from './reduce/action'
function App() {

  const newbalance = useSelector((state) => state.balance);

  const dispatch = useDispatch()
  return (
    <div className="App">
      <h3>updatebalance{newbalance}</h3>
      <button onClick={() => dispatch(add())}>Add Balance</button>
      <button onClick={() => dispatch(del())}>Remove Balance</button>
    </div>
  );
}
export default App;
