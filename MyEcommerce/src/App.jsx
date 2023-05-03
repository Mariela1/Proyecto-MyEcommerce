import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
     <ItemListContainer texto="Mireya"/>
    </>
  )
}

export default App
