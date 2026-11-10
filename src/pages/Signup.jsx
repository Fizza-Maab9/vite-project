
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup({ darkMode }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()

    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill all fields')
      return
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    // Demo account Local Storage mein save hoga
    const user = { name, email, password }

    localStorage.setItem('foodieUser', JSON.stringify(user))

    alert('Signup successful! Please Login.')
    navigate('/login')
  }

  return (
    <div className={`min-h-screen flex items-center justify-center p-5 ${
      darkMode ? 'bg-gray-900' : 'bg-orange-50'
    }`}>

      <form onSubmit={handleSignup}
        className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold text-orange-500 text-center mb-6">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white placeholder-gray-300 border border-gray-600 focus:border-orange-500 outline-none"
        />

        <input
          type="email"
          placeholder="Enter Your Email / ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white placeholder-gray-300 border border-gray-600 focus:border-orange-500 outline-none"
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white placeholder-gray-300 border border-gray-600 focus:border-orange-500 outline-none"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 mb-5 rounded-lg bg-gray-700 text-white placeholder-gray-300 border border-gray-600 focus:border-orange-500 outline-none"
        />

        <button type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg font-bold">
          Sign Up
        </button>

        <p className="text-white text-center mt-5">
          Already have an account?
          <Link to="/login" className="text-orange-400 ml-2">
            Login
          </Link>
        </p>

      </form>
    </div>
  )
}

export default Signup
