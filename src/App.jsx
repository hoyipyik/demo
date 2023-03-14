import { useState, useRef } from 'react'
import VideoComponent from './components/VideoComponent'
import Topbar from './components/Topbar';
import VideoPlay from './components/VideoPlay';
import Comments from './components/Comments';

function App() {
  const playerRef = useRef(null)
  const [url, setUrl] = useState('')
  const [showFlag, setShowFlag] = useState(true)
  const [percentage, setPercentage] = useState('0%')
  
  return (
    <div>
      {showFlag && <div>
        <Topbar setShowFlag={setShowFlag} />
        <VideoComponent url={url} setUrl={setUrl} setPercentage={setPercentage} />
        <VideoPlay playerRef={playerRef} percentage={percentage} url={url} />
        <Comments playerRef={playerRef} />
      </div>}
    </div>
  )
}

export default App;
