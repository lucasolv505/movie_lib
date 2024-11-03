import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter,Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Search from './pages/Search.jsx'
import Movie from './pages/Movie.jsx'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/search' element={<Search />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
