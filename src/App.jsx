import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Productos from './components/Productos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner />
      <Productos />
    </>
  )
}

export default App
