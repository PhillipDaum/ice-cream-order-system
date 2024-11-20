import { useState } from 'react'
import Form from './components/Form';
import './App.css'

function App() {

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

  let back = [];

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
    let dataObj = formData;
    back.push(dataObj);
    console.log(back)
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
    <>
      {/* header */}
      <div className="form-container">
      <h1>Ice Cream Shop</h1>
      <h2>Fill out the form to place your ice cream order!</h2>
       <Form change={handleChange} submit={handleSubmit} formData={formData} />
      </div>

    </>
  )
}

export default App
