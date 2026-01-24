import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <button className= {props.type} >
      {props.type}
    </button>
  )
}

export default Button
