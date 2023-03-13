import { useState } from 'react'
import VideoComponent from './VideoComponent'

function App() {
  const [url, setUrl] = useState('')

  return (
    <div>
      <VideoComponent url={url} setUrl={setUrl} />
    </div>
  )
}

export default App;
