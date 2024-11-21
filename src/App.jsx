import { useState } from 'react'
import Nav from './components/Nav';
import OrderQueue from './pages/OrderQueue';
import OrderForm from './pages/OrderForm';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'

function App() {

  // one ticket for one ice cream
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    flavor: "",
    vessel: "",
    toppings: {
      sprinkles: false,
      nuts: false,
      chocolateSauce: false,
    }
  });


  // Function to remove an order by index
  const removeOrder = (index) => {
    setOrders((prevOrders) => prevOrders.filter((_, i) => i !== index));
  };

  // array of all of the orders
  const [orders, setOrders] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        toppings: {
          ...prevFormData.toppings,
          [value]: checked,
        },
      }));
    } else {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // how do I do this?
    console.log("formdata", formData)
    setOrders((prevOrders) => [...prevOrders, formData])
    console.log(orders)
    // resets form
    setFormData({
      name: "",
      email: "",
      phone: "",
      flavor: "",
      vessel: "",
      toppings: {
        sprinkles: false,
        nuts: false,
        chocolateSauce: false,
      }
    });
  };

  return (
    <div className='app-container'>
      <Nav />
      {/* ask for explanation on this */}
      <Routes>
        <Route path="/" element={<OrderForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />} />
        <Route path="/order-queue" element={<OrderQueue orders={orders} removeOrder={removeOrder}/>} />
      </Routes>
    </div>
  )
}

export default App
