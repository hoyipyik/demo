import React, { useEffect } from 'react'
import VideoJS from './VideoJS'
import videojs from 'video.js'

const VideoPlay = ({ url, percentage, playerRef }) => {
    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: url,
            type: 'video/mp4'
        }]
    }

    const handlePlayerReady = (player) => {
        playerRef.current = player
        // You can handle player events here.
        player.on('waiting', () => {
            videojs.log('player is waiting')
        })
        player.on('dispose', () => {
            videojs.log('player will dispose')
        })
    }

    const getTimeStampHandler = () => {
        const player = playerRef.current
        const currentTime = player.currentTime()
        console.log(currentTime)
    }

    return (
        <div>
            {(percentage !== '0%' && percentage !== '100%') && <div>{`Upload progress: ${percentage}`}</div>}
            {url !== '' && <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />}
            <button style={{marginTop: '3rem'}} onClick={getTimeStampHandler}>get time</button>
        </div>
    )
}

export default VideoPlay