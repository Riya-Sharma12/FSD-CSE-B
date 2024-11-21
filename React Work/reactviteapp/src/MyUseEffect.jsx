import React , {useEffect, useState} from 'react'

function MyUseEffect() {

    const[count,setCount] = useState(0);
    const[pointer,setPointer] = useState(0);
    useEffect(()=>{
     console.log("updated count:" +count);
     console.log("updated pointer:"+pointer);
    },[count,pointer])

    function doIncrement(){
        setCount(count+50);
    }

    function doPointer(){
        setPointer(pointer+100);
    }

  return (
    <div>
        <h2>{count}</h2> &nbsp;
        <button onClick={doIncrement}>Increment</button>
        <h2>{pointer}</h2> &nbsp;
        <button onClick={doPointer}>Ponting</button>
        
    </div>
  )
}

export default MyUseEffect
