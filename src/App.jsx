import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/homePage'
import MainPage from './pages/mainPage'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
    
    </>
  )
}

export default App
