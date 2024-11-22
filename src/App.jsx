import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import OrderQueue from './pages/OrderQueue';
import OrderForm from './pages/OrderForm';
import StickyFooter from './components/StickyFooter';
import './App.css'

function App() {
  // form data; a single ice cream order ticket
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
  // array of all of the orders
  const [orders, setOrders] = useState([]);

  // removes order tickets by index
  const removeOrder = (index) => {
    setOrders((prevOrders) => prevOrders.filter((_, i) => i !== index));
  };

  // updates form data as user interacts with form 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // for the toppings, which are the only checkboxes and nested in the larger object
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

  // form submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    // adds new order to array of orders
    setOrders((prevOrders) => [...prevOrders, formData])
    // resets form data
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
      <div className="content-wrap">
        <Navbar />
        {/* ask for explanation on this */}
        <Routes>
          <Route path="/" element={<OrderForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />} />
          <Route path="/order-queue" element={<OrderQueue orders={orders} removeOrder={removeOrder} />} />
        </Routes>
      </div>
      <StickyFooter />
    </div>
  )
}

export default App
