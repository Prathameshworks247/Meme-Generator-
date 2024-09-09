import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Hero from './components/Hero'
import datas from './data'
function App() {
  const cardData = datas.map((data)=><Card key = {data.id} {...data} />)
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="cards">
        {cardData}
      </div>
    </>
  )
}

export default App
