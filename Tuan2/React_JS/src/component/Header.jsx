import React from 'react'

function Header(props) {
  return (
    <header style={{position: 'relative', fontWeight: 'bold', width: "100%", height: '60px', backgroundColor: 'rgba(255, 255, 255, 0.3)', padding: '10px', alignItems: 'center'}}>
        <div style={{position: 'absolute', left: '10px',  fontSize: '20px', color: '#000'}}>
            {props.name}
        </div>

        <div>
            <button style={{position: 'absolute', fontWeight: 'bold', right: '10px', color: '#000', fontSize: '20px', backgroundColor: 'rgba(255, 255, 255, 0)'}}>Đăng xuất</button>
        </div>

        
    </header>
  )
}

export default Header