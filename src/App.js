import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './pages/Header'
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
   Link,
   Outlet,
   useParams,
   NavLink,
   useNavigate,
   useLocation
} from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Projects from './pages/Projects'
import ContactUs from './pages/ContactUs'
import ProjectDetails from './pages/ProjectDetails'
import Home from './pages/Home'

function App() {
   return (
      <div className="App">
         
   <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/details" element={<ProjectDetails />} />
         </Routes>
         </Router>
      </div>
   )
}

export default App
