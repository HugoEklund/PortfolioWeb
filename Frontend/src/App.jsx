import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <h1 className="app-heading">
        this shit loud asl twin
      </h1>

      <div className="video-container">
        <video
          src="/assets/gas.mov"
          controls
          className="video-player"
        >
        </video>
      </div>
    </div>
  )
}

export default App
