
import MyButton from '../components/MyButton'
import Card from '../components/Card'

function Services() {
  return (
    <div className="min-h-screen bg-orange-50 px-10 md:px-20 py-16">

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-600">
          Our Services
        </h1>

        <p className="text-gray-600 mt-4">
          Explore our delicious food menu.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

        <Card
          title="Cheese Burger"
          description="Fresh and juicy cheese burger."
          price="$10"
          image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
        />

        <Card
          title="Italian Pizza"
          description="Hot and cheesy Italian pizza."
          price="$15"
          image="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
        />

        <Card
          title="French Fries"
          description="Crispy and golden french fries."
          price="$5"
          image="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600"
        />

        <Card
          title="Milkshake"
          description="Fresh and creamy chocolate shake."
          price="$7"
          image="https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600"
        />

      </div>

      <div className="text-center mt-10">
        <MyButton text="View Menu" />
      </div>

    </div>
  )
}

export default Services
