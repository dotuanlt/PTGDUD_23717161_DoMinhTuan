import React from 'react'
import { useRecoilValue } from 'recoil'
import CounterAtom from '../states/CounterAtom'

export default function ComponentA() {
    var value = useRecoilValue(CounterAtom);
    return (
        <>
            <div>ComponentA</div>
            <h1>{value}</h1>
        </>
    )
}

