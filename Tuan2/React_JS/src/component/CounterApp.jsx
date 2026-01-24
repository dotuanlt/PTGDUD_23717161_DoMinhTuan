import React from 'react'
import './CounterApp.css'
import { useState } from 'react';

function CounterApp() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    const reduce = () => {
        if(count > 0)
            setCount(count - 1);
    }

    const reset = () => {
        setCount(0)
    }

  return (
    <div style={{marginTop: '100px'}}>
        <h1>Counter App</h1>

        <button className='btnIncrease' onClick = {increase}> + </button>

        <input style={{color: count > 10 ? 'red': 'black', padding: '10px'}} type="text" name="" id="" value={count} disabled />
 
        <button className='btnReduce' onClick = {reduce}> - </button>


        <div>
            <button className='btnReset' onClick = {reset}> Reset </button>
        </div>
    </div>
  )
}

export default CounterApp