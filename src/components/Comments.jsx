import React from 'react'
import { useState } from 'react'
import CommentBox from './CommentBox'
import CommentList from './CommentList'

const Comments = ({ playerRef, url }) => {
  const [refreshFlag, setRefreshFlag] = useState(false)
  
  // const getCurrentTimeHandler = () => {
  //   const player = playerRef.current
  //   const currentTime = player.currentTime()
  //   return currentTime
  // }

  return (
    <div>
      <CommentBox playerRef={playerRef} url={url} setRefreshFlag={setRefreshFlag}/>
      <CommentList url={url} refreshFlag={refreshFlag}/>
    </div>
  )
}

export default Comments