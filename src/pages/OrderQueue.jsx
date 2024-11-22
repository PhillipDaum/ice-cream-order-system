import './OrderQueue.css'

function OrderQueue({ orders, removeOrder }) {

  return (
    <div className='orders-container'>
      {orders.map((order, index) => (
        <div key={index} className='order-card'>
          <div className="order-card-flex-container">
            <div className="order-card-user-info">
              <p>Name: {order.name}</p>
              <p>Email: {order.email}</p>
              <p>Phone: {order.phone}</p>
            </div>

            <div className="order-card-order">
              <p>Vessel: {order.vessel}</p>
              <p>Flavor: {order.flavor}</p>
              {/* I want to go back and use an array to do this */}
              {Object.entries(order.toppings)
                .filter(([key, value]) => value) // Keep only true toppings
                .map(([key]) => (
                  <p key={key}>Topping(s): {key}</p>
                ))}
            </div>
          </div>

          {/* removes item from 'orders' array */}
          <button className="remove-order" onClick={() => removeOrder(index)}>Serve Order</button>
        </div>
      ))}
    </div>
  )
}

export default OrderQueue
