
import MyButton from '../components/MyButton'

function About() {
  return (
    <div className="min-h-screen bg-orange-50 px-10 md:px-20 py-16">

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-600">
          About Our Restaurant
        </h1>

        <p className="text-gray-600 mt-5 text-lg">
          We serve delicious food with love and passion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

        <img
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=600"
          alt="Burger"
          className="w-full h-64 object-cover rounded-2xl shadow-lg"
        />

        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
          alt="Pizza"
          className="w-full h-64 object-cover rounded-2xl shadow-lg"
        />

        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600"
          alt="Restaurant food"
          className="w-full h-64 object-cover rounded-2xl shadow-lg"
        />

      </div>

      <div className="text-center mt-10">
        <p className="text-gray-600 mb-6">
          Our mission is to make every meal special for our customers.
        </p>

        <MyButton text="Discover More" />
      </div>

    </div>
  )
}

export default About
