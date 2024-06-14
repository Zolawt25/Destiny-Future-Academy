import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import BlogPage from './pages/BlogPage';
import AcademicsPage from './pages/AcademicsPage';






const App = () => {
  return (
    <div>
      <NavBar/>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/academics' element={<AcademicsPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
