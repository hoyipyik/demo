import React from 'react'

const CommentItem = ({userId, videoId, content, timeStamp, id}) => {
  return (
    <div  key={id}>
        <div>{`${userId}: ${content}`}</div>
        <div>{`Post At ${timeStamp}`}</div>
    </div>
  )
}

export default CommentItem