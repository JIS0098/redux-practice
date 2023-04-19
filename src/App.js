
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count =useSelector(state=>state.count); //useSelector는 (state를 매개변수로 받은)함수를 매개변수로 받는다.
  const dispatch = useDispatch();
  const addCount = () => {
    dispatch({type:"INCREMENT"}) // type: 액션의 이름
  }

  return (
    <div className="App">
      <h1> {count}</h1>
      <button onClick={addCount}>클릭!</button>
    </div>
  );
}

export default App;
