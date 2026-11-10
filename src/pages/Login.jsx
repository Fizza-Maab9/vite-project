
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login({ darkMode }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    // Local Storage se Signup account lena
    const savedUser = JSON.parse(
      localStorage.getItem('foodieUser')
    )

    // Enter ki hui ID aur Password check karna
    if (
      savedUser &&
      savedUser.email === email.trim() &&
      savedUser.password === password
    ) {
      // Demo login session save karna
      sessionStorage.setItem('foodieSession', JSON.stringify({
        name: savedUser.name,
        email: savedUser.email
      }))

      alert('Login Successful!')
      navigate('/')
    } else {
      alert('Invalid ID or Password!')
    }
  }

  return (
    <div className={`min-h-screen flex items-center justify-center p-5 ${
      darkMode ? 'bg-gray-900' : 'bg-orange-50'
    }`}>

      <form onSubmit={handleLogin}
        className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold text-orange-500 text-center mb-6">
          Welcome Back
        </h1>

        <input
          type="email"
          placeholder="Enter Your Email / ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white placeholder-gray-300 border border-gray-600 focus:border-orange-500 outline-none"
        />

        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-5 rounded-lg bg-gray-700 text-white placeholder-gray-300 border border-gray-600 focus:border-orange-500 outline-none"
        />

        <button type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg font-bold">
          Login
        </button>

        <p className="text-white text-center mt-5">
          Don't have an account?
          <Link to="/signup" className="text-orange-400 ml-2">
            Sign Up
          </Link>
        </p>

      </form>
    </div>
  )
}

export default Login
