import { useState } from 'react';
import './App.css';
import Box from "./component/box"

function App() {
  let counter=0;
  const [counter2, setCounter2]=useState(0);
  const increase =()=>{
    counter =counter +1;
    setCounter2(counter2+1);
    console.log("counter",counter,"counter2",counter2);
  };

  //1 유저가 버튼을 ㄱ클릭한다
  //2 counte1해서 1이됨
  //setstate함수호출
  //변수갑은 1로 보이고 state값은 아직 안변해서 그전에 값이 보임
  //함수 끝
  //app다시 Re render
  //let counter=0을 거치면서 counter 값은 다시 0으로 초기화가 된다
  //state값은 update가 되면서 다시 Render
  return ( 
  <div>
    <div>{counter}</div>
    <div>state:{counter2}</div>
<button onClick={increase}>
  클릭!
</button>
  </div>
  );
}

export default App;
