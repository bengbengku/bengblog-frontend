import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import CreatePost from './pages/createPost'
import Home from './pages/home'
import Activate from './pages/home/activate'
import LoggedInRoutes from './routes/LoggedInRoutes'
import NotLoggedInRoutes from './routes/NotLoggedInRoutes'
import ResetContainer from './pages/reset'

function App() {
  return (
    <Routes>
      <Route path='/post' element={<CreatePost />} exact />
      <Route path='/activate/:token' element={<Activate />} exact />
      <Route path='/' element={<Home />} exact />
      <Route path='/login' element={<Login />} exact />
      <Route path='/reset' element={<ResetContainer />} exact />
    </Routes>
  )
}

export default App
