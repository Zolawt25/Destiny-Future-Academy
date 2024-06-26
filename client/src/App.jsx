import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import BlogPage from './pages/BlogPage';
import AcademicsPage from './pages/AcademicsPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SpecialProgramPage from './pages/SpecialProgramPage';
import LibraryPage from './pages/LibraryPage';






const App = () => {
  return (
    <div>
      <NavBar/>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/academics' element={<AcademicsPage/>}/>
          <Route path='/gallery' element={<GalleryPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/library' element={<LibraryPage/>}/>
          <Route path='/special' element={<SpecialProgramPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
