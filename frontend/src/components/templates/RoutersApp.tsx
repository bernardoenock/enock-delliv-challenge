import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import DashBoard from "./DashBoard"
import Login from "./Login"
import Buy from "./Buy"

function RoutersApp() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Buy />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  )
}

export default RoutersApp
