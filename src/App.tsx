import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { AboutMe, Contact, Login, TestFunction, Vacancies } from './routes/routes'

function App() {
  return (
    <div style={{ height: '100%' }} className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TestFunction />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/vacancies' element={<Vacancies />} />
          <Route path='/testfunction' element={<TestFunction />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
