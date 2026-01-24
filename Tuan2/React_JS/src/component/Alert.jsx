import React from 'react'
import './Alert.css'

function Alert(props) { 
    return (
        <button className={props.style} onClick={props.onClick}>
            {props.title}
        </button>
  )
}

export default Alert