
import MyButton from '../components/MyButton'

function Contact() {
  return (
    <div className="min-h-screen bg-orange-50 px-6 py-16">

      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-orange-600">
          Contact Us
        </h1>

        <p className="text-gray-600 mt-4">
          We would love to hear from you!
        </p>
      </div>

      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <form className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Your Name"
            className="border p-4 rounded-lg outline-orange-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border p-4 rounded-lg outline-orange-500"
          />

          <input
            type="text"
            placeholder="Subject"
            className="border p-4 rounded-lg outline-orange-500"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="border p-4 rounded-lg outline-orange-500"
          />

          <MyButton text="Send Message" />

        </form>

        <div className="mt-8 text-center text-gray-600">
          <p>Email: info@foodie.com</p>
          <p className="mt-2">Phone: 03001234567</p>
          <p className="mt-2">Location: Islamabad, Pakistan</p>
        </div>

      </div>

    </div>
  )
}

export default Contact
