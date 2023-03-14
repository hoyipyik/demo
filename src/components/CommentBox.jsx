import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { userId } from '../tools/Const'
import axios from 'axios'

const CommentBox = ({ playerRef, url, setRefreshFlag }) => {
    const [content, setContent] = useState('')

    const sendDataGenerator = () => {
        if (content !== '') {
            const player = playerRef.current
            const timeStamp = player.currentTime()
            const sendData = {
                timeStamp: timeStamp,
                userId: userId,
                videoId: url,
                content: content,
            }
            return sendData
        }
    }

    const inputHandler = (event) => {
        const { value } = event.target
        setContent(() => value)
    }

    const submitHandler = () => {
        const sendData = sendDataGenerator()
        axios.post('http://localhost:7896/comment/add', sendData)
            .then(res => {
                if (res && res.data.flag) {
                    setRefreshFlag(flag => !flag)
                    setContent('')
                } else {
                    console.log(res, 'send comment failed')
                    alert('send comment failed')
                }
            })
            .catch(err => {
                console.log(err, 'send comment failed')
                alert('send comment failed')
            })
    }

    return (
        <div className='comment-box'>
            <div className='comment-input-zone'>
                <AccountCircleIcon />
                <textarea rows={2} onChange={inputHandler} value={content} />
            </div>
            <div className='comment-submit-zone'>
                <div />
                <button onClick={submitHandler}>Comment</button>
            </div>
        </div>
    )
}

export default CommentBox