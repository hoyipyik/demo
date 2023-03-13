import { useState } from 'react'
import VideoComponent from './VideoComponent'
import Topbar from './Topbar';
import VideoPlay from './VideoPlay';

function App() {
  const [url, setUrl] = useState('')
  const [showFlag, setShowFlag] = useState(true)
  const [percentage, setPercentage] = useState('0%')

  return (
    <div>
      {showFlag && <div>
        <Topbar setShowFlag={setShowFlag} />
        <VideoPlay percentage={percentage} url={url}/>
        <VideoComponent url={url} setUrl={setUrl} setPercentage={setPercentage} />
      </div>}
    </div>
  )
}

export default App;
