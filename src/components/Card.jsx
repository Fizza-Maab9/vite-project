
import MyButton from './MyButton'

function Card({ title, description, price, image, darkMode }) {
  return (
    <div className={`rounded-2xl shadow-lg overflow-hidden ${
      darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
    }`}>

      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <p className={darkMode ? "text-gray-300 mt-2" : "text-gray-500 mt-2"}>
          {description}
        </p>

        <p className="text-orange-500 font-bold text-xl mt-3">
          {price}
        </p>

        <div className="flex gap-3 mt-5">
          <MyButton text="Add" />
          <MyButton text="Delete" />
        </div>

      </div>
    </div>
  )
}

export default Card
