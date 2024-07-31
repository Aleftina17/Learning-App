import Sidebar from './components/Sidebar'
import AuthPage from './pages/AuthPage'
import CreatePage from './pages/CreatePage'
import DashboardPage from './pages/DashboardPage'
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
          <Route path='/dashboard' element={<DashboardPage />}></Route>
          <Route path='/create' element={<CreatePage />}></Route>
        </Routes>
      </div>
   </Router>
  )
}

export default App
