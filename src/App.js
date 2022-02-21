import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './pages/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Projects from './pages/Projects'
import ContactUs from './pages/ContactUs'
import ProjectDetails from './pages/ProjectDetails'
import Home from './pages/Home'
import Form from './pages/Form'
import Pay from './pages/Pay'

function App() {
   return (
      <div className="App">
<<<<<<< HEAD
         <Router basename="/app">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<AboutUs />} />
               <Route path="/services" element={<Services />} />
               <Route path="/projects" element={<Projects />} />
               <Route path="/contact" element={<ContactUs />} />
               <Route path="/details" element={<ProjectDetails />} />
               <Route path="/form" element={<Form />} />
               <Route path="/pay" element={<Pay />} />
            </Routes>
=======
         
   <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/details" element={<ProjectDetails />} />
         </Routes>
>>>>>>> 739d04ffeddec0dda839d306c66c7ee41ae3b7f1
         </Router>
      </div>
   )
}

export default App
