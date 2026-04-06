import React from 'react'
import { useRecoilValue } from 'recoil'
import CounterAtom from '../states/CounterAtom'
import ThemeAtom from '../states/ThemeAtom'

export default function ComponentA() {
    var theme = useRecoilValue(ThemeAtom);
    var value = useRecoilValue(CounterAtom);
    return (
        <>
            <div>ComponentA</div>
            <h1 className={theme}>{value}</h1>
        </>
    )
}

