import React, { useState } from "react"
import "./index.css"

const App = () => {
  const [cardColor, setCardColor] = useState("")

  const randomColor = () => {
    const hexaColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    let cajita = ""

    for (let i = 1; i <= 6; i++) {
      let azar = 0 + Math.random() * (15 - 0)
      cajita = cajita + hexaColor[parseInt(azar)]
    }
    return cajita
  }

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
    <>
      <div className="container-card ">
        <div style={color}></div>
        <button onClick={handleColor}>click me</button>
        <p>#{cardColor}</p>
      </div>
    </>
  )
}

export default App
