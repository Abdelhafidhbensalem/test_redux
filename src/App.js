import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import InitialValue from './Components/InitalValue.js/InitialValue';
import { useDispatch, useSelector } from 'react-redux';
import { toggleInitial } from './JS/actions/actions';

function App() {
  const show = useSelector(state => state.show)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={()=>dispatch(toggleInitial())}>show InitalValue</button>
      {show?<InitialValue/>:null}
      <Counter />
    </div>
  );
}

export default App;
