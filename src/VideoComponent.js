import React, { useState } from 'react'
import { cloudName, uploadPreset } from './Const';
import axios from 'axios';

/**
 * This component is used to upload and show video
 */
const VideoComponent = ({url, setUrl}) => {
    const [file, setFile] = useState(null)

    const fileSelectHandler = (e) => {
        setFile(() => e.target.files[0])
        // fileUploader()
    }

    // wrap file into formData
    const generateData = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', uploadPreset)
        formData.append('resource_type', 'video')
        return formData
    }

    // send http requst to upload video
    const fileUploader = async () => {
        if (file) {
            const formData = generateData()
            axios.post(
                `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`,
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                    onUploadProgress: (progressEvent) => {
                        const progress = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        console.log(`Upload progress: ${progress}%`);
                    },
                })
                // callback to set responce url
                .then(res => {
                    console.log(res, 'result')
                    if (res && res.data["secure_url"] !== '') {
                        setUrl(res.data["secure_url"])
                    }else{
                        console.log('err')
                    }
                })
                .catch(err => {
                    console.log(err, 'err')
                })
        }
    }

    return (
        <div className='video-component'>
            {url !== '' && <video controls style={{height: '10rem', width: '20rem'}}>
                <source src={url} />
            </video>}
            <input type='file' onChange={fileSelectHandler} />
            <button onClick={fileUploader}>Upload</button>
        </div>
    )
}

export default VideoComponent