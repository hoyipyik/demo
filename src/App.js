import { useState } from 'react'
import VideoComponent from './VideoComponent'
import Topbar from './Topbar';

function App() {
  const [url, setUrl] = useState('')
  const [showFlag, setShowFlag] = useState(true)

  return (
    <div>
      {showFlag && <Topbar setShowFlag={setShowFlag}/>}
      {showFlag && <VideoComponent url={url} setUrl={setUrl} />}
    </div>
  )
}

export default App;
