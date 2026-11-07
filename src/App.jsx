
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <div>

      <nav className="bg-gray-900 text-white px-8 py-5 flex flex-wrap items-center justify-between gap-5">

        <h1 className="text-3xl font-bold text-orange-500">
          Foodie.
        </h1>

        <div className="flex flex-wrap gap-7 font-semibold">

          <Link className="hover:text-orange-400" to="/">
            Home
          </Link>

          <Link className="hover:text-orange-400" to="/about">
            About
          </Link>

          <Link className="hover:text-orange-400" to="/services">
            Services
          </Link>

          <Link className="hover:text-orange-400" to="/contact">
            Contact
          </Link>

        </div>

      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </div>
  )
}

export default App
