
import MyButton from './MyButton'

function Card({ title, description, price, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800">
          {title}
        </h2>

        <p className="text-gray-500 mt-2">
          {description}
        </p>

        <p className="text-orange-600 font-bold text-xl mt-3">
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
