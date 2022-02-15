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
import Home from './pages/Home'

function App() {
   return (
      <div className="App">
         
   <Router  basename='/app'>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app/about" element={<AboutUs />} />
            <Route path="/app/services" element={<Services />} />
            <Route path="/app/projects" element={<Projects />} />
            <Route path="/app/contact" element={<ContactUs />} />
         </Routes>
         </Router>
      </div>
   )
}

export default App
