import { useState } from 'react'
import Form from './components/Form';
import './App.css'

function App() {



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    flavor: "",
    // vessel: "",
    // ketchup: "",
    // olives: "",
    // jellybeans: ""
  });

  let back = [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let dataObj = formData;
    back.push(dataObj);
    console.log(back)
    // reset form
    setFormData({ name: '', email: '', phone: "", flavor: "" });
  };

  // vessel: "", ketchup: "", olives: "", jellybeans: ""

  return (
    <>
      <Form change={handleChange} submit={handleSubmit} formData={formData} />

      {/* <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        <label htmlFor="email">email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
        <label htmlFor="phone">phone</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}/>
        <button type="submit">clicky</button>
      </form> */}
    </>
  )
}

export default App
