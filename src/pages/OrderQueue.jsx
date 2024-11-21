import './OrderQueue.css'

// import the stack of orders
function OrderQueue({ orders, removeOrder }) {

  return (
    // order.name .email .phone .flavor .vessel .toppings (all that are true)
    <div className='orders-container'>
      {orders.map((order, index) => (
        <div key={index} className='order-card'>
          <p>{order.name}</p>
          <p>{order.email}</p>
          <p>{order.phone}</p>

          <p>{order.vessel}</p>
          <p>{order.flavor}</p>

          {/* I want to go back and use an array to do this */}
          {/* Render toppings that are true */}
          {Object.entries(order.toppings)
            .filter(([key, value]) => value) // Keep only true toppings
            .map(([key]) => (
              <p key={key}>Topping: {key}</p>
            ))}
            {/* this button will remove the item from the array 'orders' */}
            <button onClick={() => removeOrder(index)}>Serve Order</button>
        </div>
      ))}
    </div>
  )
}

export default OrderQueue
