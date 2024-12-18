import './Form.css'
function Form({ handleChange, handleSubmit, formData }) {

    return (
        <>
            <form id="form" onSubmit={handleSubmit}>
                <fieldset className='user-info-field'>
                    <legend>User Info</legend>
                    <div className="grid-switch">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="grid-switch">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="grid-switch">
                        <label htmlFor="phone">Phone:</label>
                        {/* <!--  can add pattern, etc later --> */}
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-4567-8901" value={formData.phone} onChange={handleChange} required />
                    </div>
                </fieldset>
                <fieldset>
                    <label htmlFor="icecream-flavor">Ice Cream Flavor</label>
                    <select id="icecream-flavor" className='icecream-flavor' name="flavor" value={formData.flavor} onChange={handleChange}>
                        <option value="" disabled>--option--</option>
                        <option value="mint chocolate chip">Mint Chocolate Chip</option>
                        <option value="vanilla">Vanilla</option>
                        <option value="peanut butter">Peanut Butter</option>
                    </select>
                </fieldset>
                <fieldset>
                    <legend>Cup or Cone?</legend>
                    <div className="radio">
                        <input type="radio" id="cone" value="cone" name="vessel" checked={formData.vessel === "cone"} onChange={handleChange} />
                        <label htmlFor="cone" className="cone">Cone</label>
                    </div>
                    <div className="radio">
                        <input type="radio" id="cup" value="cup" name="vessel" checked={formData.vessel === "cup"} onChange={handleChange} />
                        <label htmlFor="cup" className="cup">Cup</label>
                    </div>
                </fieldset>
                <fieldset className="toppings-flex">
                    <legend>What toppings would you like?</legend>
                    <div>
                        <input type="checkbox" id="sprinkles" name="toppings" value="sprinkles" checked={formData.toppings.sprinkles == true} onChange={handleChange} />
                        <label htmlFor="sprinkles">Sprinkles</label>
                    </div>
                    <div>
                        <input type="checkbox" id="nuts" name="toppings" value="nuts" checked={formData.toppings.nuts === true} onChange={handleChange} />
                        <label htmlFor="nuts">Nuts</label>
                    </div>
                    <div>
                        <input type="checkbox" id="chocolateSauce" name="toppings" value="chocolateSauce" checked={formData.toppings.chocolateSauce === true} onChange={handleChange} />
                        <label htmlFor="chocolateSauce">Chocolate Sauce</label>
                    </div>
                </fieldset>
                <button type="submit" className="submit-button" id="submit-button">Place Order</button>
            </form>
        </>
    )
}

export default Form