import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Productos from './components/Productos'
import Horarios from "./components/horarios"
import Footer from './components/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner />
      <Productos />
      <Horarios />
      <Footer />
      
    </>
  )
}


export default App
