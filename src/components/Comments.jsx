import React from 'react'

const Comments = ({ playerRef }) => {
  const handler = () => {
    const player = playerRef.current
    const currentTime = player.currentTime()
    console.log(currentTime)
  }
  return (
    <div>
      <button onClick={handler}>comment get time</button>
    </div>
  )
}

export default Comments