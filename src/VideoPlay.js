import React from 'react'

const VideoPlay = ({url, percentage}) => {
    return (
        <div>
            {(percentage !== '0%' && percentage !== '100%') && <div>{`Upload progress: ${percentage}`}</div>}
            {url !== '' && <video controls style={{ height: '10rem', width: '20rem' }}>
                <source src={url} />
            </video>}
        </div>
    )
}

export default VideoPlay