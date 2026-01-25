import React from 'react'

function Footer(props) {
  return (
    <footer style={{backgroundColor: 'rgba(255, 255, 255, 0.3)',  width: "100%", height: '60px',  padding: '10px', alignItems: 'center', marginTop: 'auto'}}>
        <p style={{textAlign: 'center', }}>Xin Chào. Tôi là <i>{props.name}</i></p>
    </footer>
  )
}

export default Footer