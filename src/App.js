import React from 'react';
import Restaurant from "./component/basics/Restaurant";
import UseState from './component/Hooks/useState';
import UseEffect from './component/Hooks/useEffect';
import UseReducer from './component/Hooks/useReducer';
import Todo from './component/todo/todo'
import Temperature from './component/weather/temperature'

const App = () => {
  return (
    <>
     
     
      {/* <Restaurant /> */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseReducer/> */}
      {/* <Todo /> */}
      <Temperature />
    </>
  )
}

const MyName = () => {
  return (
    <> Another Reference</>
  )
}

export default App
