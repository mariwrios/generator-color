import React, { useState } from "react"
import { randomColor } from "./helps/randomColor"

import "./index.css"

const App = () => {
  const [cardColor, setCardColor] = useState("")

  const handleColor = () => {
    setCardColor(() => randomColor().length >= 6 && randomColor())
  }
  const color = {
    height: "23vh",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 250,
    background: `#${cardColor}`
  }
  return (
    <div className="container-card ">
      <div style={color}></div>
      <button onClick={handleColor}>click me</button>
      <p>#{cardColor}</p>
    </div>
  )
}

export default App
