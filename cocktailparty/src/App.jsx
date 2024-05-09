import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'

function App() {
  const [logged,setLogin]= useState(false)
 if(logged == false){
  return (
        <Homepage />
  )
}
}

export default App


