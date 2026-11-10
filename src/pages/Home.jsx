
import MyButton from '../components/MyButton'

function Home({ darkMode }) {
  return (
    <div className={`min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 gap-10 ${
      darkMode ? "bg-gray-900 text-white" : "bg-orange-50 text-gray-900"
    }`}>

      <div className="md:w-1/2">

        <h1 className="text-5xl font-bold">
          Welcome to <span className="text-orange-500">Foodie</span>
        </h1>

        <h2 className="text-3xl font-semibold mt-4">
          Delicious Food, Happy Life!
        </h2>

        <p className={`mt-5 text-lg leading-8 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}>
          Enjoy fresh burgers, tasty pizzas and delicious meals.
          We prepare every dish with love and fresh ingredients.
        </p>

        <div className="mt-7">
          <MyButton text="Explore Menu" />
        </div>

      </div>

      <div className="md:w-1/2">
        <video
          className="w-full h-80 object-cover rounded-3xl shadow-xl"
          autoPlay
          muted
          loop
          playsInline
          controls
          src="https://videos.pexels.com/video-files/4253319/4253319-hd_1920_1080_25fps.mp4"
        />
      </div>

    </div>
  )
}

export default Home
