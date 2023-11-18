import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovie from './components/GenreMovie'
import MovieList from './components/MovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
     <Header/>
     <Slider/>
     <ProductionHouse/>
     <GenreMovie/>
     <MovieList/>
      </div>
      
    </>
  )
}

export default App
