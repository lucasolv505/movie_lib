import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Search from './pages/Search.jsx'
import Movie from './pages/Movie.jsx'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path='/movies_lib' element={<Home/>}/>
          <Route path='/movies_lib/movie/:id' element={<Movie/>}/>
          <Route path='movies_lib/search' element={<Search/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
