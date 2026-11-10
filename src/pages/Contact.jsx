
import MyButton from '../components/MyButton'

function Contact({ darkMode }) {
  return (
    <div className={`min-h-screen px-6 py-16 ${
      darkMode ? "bg-gray-900 text-white" : "bg-orange-50 text-gray-900"
    }`}>

      <div className="text-center mb-10">

        <h1 className="text-5xl font-bold text-orange-500">
          Contact Us
        </h1>

        <p className={`mt-4 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}>
          We would love to hear from you!
        </p>

      </div>

      <div className={`max-w-xl mx-auto p-8 rounded-2xl shadow-lg ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}>

        <form className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Your Name"
            className={`border p-4 rounded-lg outline-orange-500 ${
              darkMode ? "bg-gray-700 text-white border-gray-600 placeholder-gray-300" : "bg-white text-gray-900"
            }`}
          />

          <input
            type="email"
            placeholder="Your Email"
            className={`border p-4 rounded-lg outline-orange-500 ${
              darkMode ? "bg-gray-700 text-white border-gray-600 placeholder-gray-300" : "bg-white text-gray-900"
            }`}
          />

          <input
            type="text"
            placeholder="Subject"
            className={`border p-4 rounded-lg outline-orange-500 ${
              darkMode ? "bg-gray-700 text-white border-gray-600 placeholder-gray-300" : "bg-white text-gray-900"
            }`}
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className={`border p-4 rounded-lg outline-orange-500 ${
              darkMode ? "bg-gray-700 text-white border-gray-600 placeholder-gray-300" : "bg-white text-gray-900"
            }`}
          />

          <MyButton text="Send Message" />

        </form>

        <div className={`mt-8 text-center ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}>

          <p>Email: info@foodie.com</p>
          <p className="mt-2">Phone: 03001234567</p>
          <p className="mt-2">Location: Islamabad, Pakistan</p>

        </div>

      </div>

    </div>
  )
}

export default Contact
