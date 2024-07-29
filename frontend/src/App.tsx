import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
   <Router>
      <div className="app-container">
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/auth' element={<AuthPage />}></Route>
        </Routes>
      </div>
   </Router>
  )
}

export default App
