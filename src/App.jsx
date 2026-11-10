
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-orange-50 text-gray-900 min-h-screen"}>

      {/* Navbar */}
      <nav className={`px-8 py-5 flex flex-wrap items-center justify-between gap-5 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-900 text-white"
      }`}>

        <h1 className="text-3xl font-bold text-orange-500">
          Foodie.
        </h1>

        <div className="flex flex-wrap items-center gap-7 font-semibold">

          <Link className="hover:text-orange-400" to="/">Home</Link>

          <Link className="hover:text-orange-400" to="/about">About</Link>

          <Link className="hover:text-orange-400" to="/services">Services</Link>

          <Link className="hover:text-orange-400" to="/contact">Contact</Link>

          {/* Login and Signup Navbar Links */}
          <Link className="hover:text-orange-400" to="/login">Login</Link>

          <Link className="hover:text-orange-400" to="/signup">Signup</Link>

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

        </div>
      </nav>

      {/* All Pages */}
      <Routes>

        <Route path="/" element={<Home darkMode={darkMode} />} />

        <Route path="/about" element={<About darkMode={darkMode} />} />

        <Route path="/services" element={<Services darkMode={darkMode} />} />

        <Route path="/contact" element={<Contact darkMode={darkMode} />} />

        <Route path="/login" element={<Login darkMode={darkMode} />} />

        <Route path="/signup" element={<Signup darkMode={darkMode} />} />

      </Routes>

    </div>
  )
}

export default App
