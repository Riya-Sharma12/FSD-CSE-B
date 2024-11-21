import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ImageManipulation from './ImageManipulation'
import UseFetchApi from './useFetchApi'
import viteLogo from '/vite.svg'
import './App.css'
import MyUseEffect from './MyUseEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div style={{marginLeft:"600px"}}> */}
        {/* <h2>hello using usestate</h2> */}
        <h2>Hello using UseEffect</h2>
        <div>
          {/* <UseStudentState></UseStudentState> */}
          {/* <ImageManipulation/> */}
          {/* <MyUseEffect></MyUseEffect> */}
          <UseFetchApi></UseFetchApi>
        </div>
      {/* </div> */}
    </>
  )
}

export default App
