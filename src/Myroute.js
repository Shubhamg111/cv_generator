import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layouts from './pages/Layouts'
import Homepage from './pages/Homepage'
import EducationForm from './components/EducationForm'
import ExperienceForm from './components/ExperienceForm'

const Myroute = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Layouts/>}>
                    <Route index element={<Homepage/>} />
                    <Route path='/education' element={<EducationForm/>} />
                    <Route path='/experience' element={<ExperienceForm/>} />


                </Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Myroute
