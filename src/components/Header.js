import './css/Header.css'
import React from 'react'
// const title = "TY CSE";

function Header(props) {
  return (
    <>
      <div className='header'>
        <div className='title'>
          <p>{props.title}</p>
          </div>
      </div>
    </>
  )
}

export default Header