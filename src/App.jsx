import { useState } from "react"
import Start from "./components/Start"
import Play from "./components/play"
function App() {
  const [isstart, setIsstart] = useState(true)
  const togameplay = () => {
    setIsstart((prev) => !prev);
  }
  return (
    <>
      {
isstart ? <Play/>: <Start toggle ={togameplay}/>
      }
    </>
  )
}
export default App

