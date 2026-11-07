
import MyButton from '../components/MyButton'

function Home() {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 gap-10">

      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold text-gray-900">
          Welcome to <span className="text-orange-500">Foodie</span>
        </h1>

        <h2 className="text-3xl font-semibold mt-4">
          Delicious Food, Happy Life!
        </h2>

        <p className="text-gray-600 mt-5 text-lg leading-8">
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
