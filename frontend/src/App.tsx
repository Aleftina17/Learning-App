import Sidebar from './components/Sidebar'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
   <Router>
    <Sidebar />
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
