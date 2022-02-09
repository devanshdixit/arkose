import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header'
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
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Projects from './components/Projects'
import ContactUs from './components/ContactUs'

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactUs />} />
         </Routes>
      </div>
   )
}

export default App
