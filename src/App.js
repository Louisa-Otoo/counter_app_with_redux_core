// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import { Increment } from './store/actions';


function App() {
  const dispatch = useDispatch();
  const counterVariable = useSelector((state) => state.counter.counter)
  // console.log(counterVariable) - useSelector is used to get the current state
  // useSelector gave us exactly what the state contains/ the current data (coming from the store)/ at every level the useSelector keeps track of the global state
  // const [count, setCount] = useState(0);



  const decreaseCount = () => {
    if (counterVariable === 0) {
      resetCount();
      }else {
        dispatch({ type: 'DECREMENT'})
      }
  };

  const increaseCount = () => {
    // setCount(count + 1)
    dispatch({ type: 'INCREMENT' });
  };

  const resetCount = () => {
    dispatch({ type: 'RESET'});
  };


  return (
    <>
      <div className="App">
        <button onClick={decreaseCount}>decrease -</button>
        &nbsp; &nbsp;
        {counterVariable}
        &nbsp; &nbsp;
        <button onClick={increaseCount}>increase +</button> 

        <div>
          <button style={{marginTop:"0.5rem"}} onClick={resetCount}> Reset </button>
        </div>
      </div>


    </>  
  );
}

export default App;

