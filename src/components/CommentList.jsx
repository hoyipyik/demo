import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CommentItem from './CommentItem'
import { userId } from '../tools/Const'

const CommentList = ({ url, refreshFlag }) => {
    const [list, setList] = useState([])

    useEffect(() => {
        if (url !== '') {
            const queryFactor = {
                videoId: url
            }
            axios.post('http://127.0.0.1:7896/comment/get', queryFactor)
                .then(res => {
                    if (res && res.data.flag) {
                        setList(() => res.data.list)
                    } else {
                        console.log(res, 'get list failed')
                        alert('get list failed')
                    }
                })
                .catch(err => {
                    console.log(err, 'get list failed')
                    alert('get list failed')
                })
        }
    }, [url, refreshFlag])

    const listComponent = list.map((element, index) => {
        return <CommentItem id={index + element.timeStamp} userId={element.userId} timeStamp={element.timeStamp}
            content={element.content} videoId={element.videoId}/>
    })

    return (
        <div>
            {listComponent}
        </div>
    )
}

export default CommentList