import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import CoursesSection from './Components/CourseCard/CoursesSection'
import Teachers from './Components/Teachers/Teachers'
import Footer from './Components/Footer/Footer' 
import EducationSection from './Components/Education/EducationSection'
import StudentsComments from './Components/StudentsComments/StudentsComments'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <CoursesSection />
      <Teachers />
      <EducationSection />
      <StudentsComments />
      <Footer />
    </BrowserRouter>
  )
}

export default App
