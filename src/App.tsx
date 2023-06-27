import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { Contact, HomePages, Login } from './routes/routes'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePages />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
