import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePages from './pages/HomePages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
