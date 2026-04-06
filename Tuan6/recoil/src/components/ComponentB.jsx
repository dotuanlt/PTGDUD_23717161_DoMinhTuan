import React, { useActionState } from 'react'
import { useRecoilValue, useRecoilState, useResetRecoilState } from 'recoil'
import CounterAtom from '../states/CounterAtom'

export default function ComponentB() {
    var value = useRecoilValue(CounterAtom);
    var [count, setCount] = useRecoilState(CounterAtom);
    var reset = useResetRecoilState(CounterAtom);
    
    function handleIncrease() {
        setCount(value + 1);
    }

    function handleDecrease() {
        setCount(value - 1);
    }

    function handleReset(){
        reset()
    }

    return (
        <>
            <div>ComponentB</div>
            <h1>{value}</h1>
            <button onClick={handleIncrease} style={{width: "30%", margin: "auto"}}>Increase</button>
            <br />
            <button onClick={handleDecrease} style={{width: "30%", margin: "auto"}}>Decrease</button>
            <br />
            <button onClick={handleReset} style={{width: "30%", margin: "auto"}}>Resest</button>
        </>
    )
}

