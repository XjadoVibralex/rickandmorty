import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomeHooks =()=>{

    const {counter,increment,decrement,reset}=useCounter();


    return(
        <>
            <h1>Counter with HOOk: {counter}</h1>
            <hr />
            <button onClick={()=>increment(2)} className="btn btn-primary" >+1</button>
            <button className="btn btn-danger" onClick={reset}>Reset</button>
            <button onClick={()=>decrement(5)} className="btn btn-secondary" >-1</button>
        </>
    )

}