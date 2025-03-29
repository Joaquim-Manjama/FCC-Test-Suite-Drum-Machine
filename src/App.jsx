import { useState } from 'react'
import './App.css'

function App() {
  
  const playAudio = (letter, name) => {
    document.getElementById(`${letter}`).play()
    document.getElementById("display").textContent = name;
  }

  $(document).keydown((event) => {
    const data = {
      "Q": "Heater 1",
      "W": "Heater 2", 
      "E": "Heater 3",
      "A": "Heater 4",
      "S": "Clap",
      "D": "Open-HH",
      "Z": "Kick-n'-Hat",
      "X": "Kick",
      "C": "Closed-HH" 
    }
    const key = `${event.key}`.toUpperCase();

    data[key] ? playAudio(key, data[key]): false;
    
     

  })

  return (
    <>
      <h2>Drum Machine</h2>
      <div id="drum-machine">
        <div className="header">
          <div id="display"></div>
        </div>
        <div className="pads-container" onClick={(e) => playAudio(e.target.innerText, e.target.id)}>
          <div className="drum-pad" id="Heater 1">Q
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" className="clip" id="Q"></audio>
          </div>
          <div className="drum-pad" id="Heater 2">W
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" className="clip" id="W"></audio>
          </div>
          <div className="drum-pad" id="Heater 3">E
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" className="clip" id="E"></audio>
          </div>
          <div className="drum-pad" id="Heater 4">A
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" className="clip" id="A"></audio>
          </div>
          <div className="drum-pad" id="Clap">S
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" className="clip" id="S"></audio>
          </div>
          <div className="drum-pad" id="Open-HH">D
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" className="clip" id="D"></audio>
          </div>
          <div className="drum-pad" id="Kick-n'-Hat">Z
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
          </div>
          <div className="drum-pad" id="Kick">X
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" className="clip" id="X"></audio>
          </div>
          <div className="drum-pad" id="Closed-HH">C
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" className="clip" id="C"></audio>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
