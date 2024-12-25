import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const [inDecBy, setinDec] = useState(1);
    function increment(){
        setCount(count + inDecBy)
    }
    
    function decrement(){
        setCount(count - 1)
    }

    function incrementBy(){
        setinDec(inDecBy + 1);
    }
    
    function decrementBy(){
        setinDec(inDecBy - 1);
    }
    return(
        <>
        <h1>Counter is {count}</h1>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={incrementBy}>increment by {inDecBy}</button>
        <button onClick={decrementBy}>decrement by {inDecBy}</button>
        </>
    )
}