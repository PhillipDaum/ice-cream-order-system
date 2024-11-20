import { useState } from 'react'
import Form from './components/Form';
// import Nav from './components/Nav';
import Kitchen from './pages/Kitchen';
import Orders from './pages/Orders';
import { Routes, Route, Link } from 'react-router-dom';
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
      {/* header/Nav - first build here, then move to component */}
      <header>
                <h1>Ice Cream Shop</h1>
                <nav>
                    <ul className="nav">
                        {/* these will be the react router stuff */}
                        <li>
                         <Link to="/">Orders</Link>
                        </li>
                        <li>
                            <Link to="/kitchen">Kitchen</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Orders handleChange={handleChange} handleSubmit={handleSubmit} formData={formData}/>} />
                    <Route path="/Kitchen" element={<Kitchen />} />
                </Routes>
            </header>
    </>
  )
}

export default App
