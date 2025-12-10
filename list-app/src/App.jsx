import Header from "./components/header"
import Card from "./components/Card"
import { useState } from "react"
import InputTask from "./components/InputTask"


function App() {
  const [tasks, setTask] = useState([])

  return (
    <div className="min-h-screen w-screen bg-[#FDFCDC] ">
      <Header />
      <br />
      
      <button className=" block mx-auto bg-[#F07167] w-35 h-18 rounded-lg cursor-pointer hover:bg-[#ef8a82]" >Add</button>
      <InputTask />
     
    </div>
  )
}

export default App
