// import libs
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';;
import Example from '../components/Example'

const RouterComp = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Example/>} />
    </Routes>
  </Router>
)

export default RouterComp
