import React from 'react'

const Topbar = ({setShowFlag}) => {
  const navigateHandler = () => {
    setShowFlag(() => false)
  }
  return (
    <div className='topbar'>
        <div/>
        <button onClick={navigateHandler}>Done</button>
    </div>
  )
}

export default Topbar