import './form.css'
function Form({change, submit, formData}) {


    return (
        <>
            <h2>Fill out the form to place your ice cream order!</h2>
            {/* pass props */}
            <form id="form" onSubmit={submit}>
                <div className="grid-switch">
                    <label htmlFor="name">Name*:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={change} required />
                </div>
                <div className="grid-switch">
                    <label htmlFor="email">Email*:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={change} required />
                </div>
                <div className="grid-switch">
                    <label htmlFor="phone">Phone*:</label>
                    {/* <!--  can add pattern, etc later --> */}
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={change} required />
                </div>
                <div>
                    <div>
                        <label htmlFor="icecream-flavor">Ice Cream Flavor</label>
                    </div>
                    <select id="icecream-flavor" name="flavor" value={formData.flavor} onChange={change}>
                        {/* <!--  should show "please choose an option"			 --> */}
                        <option value="" disabled>--option--</option>
                        <option value="mint chocolate chip">Mint Chocolate Chip</option>
                        <option value="vanilla">Vanilla</option>
                        <option value="peanut butter">Peanut Butter</option>
                    </select>
                </div>
{/* 
                <div>
                    <label htmlFor="cup-or-cone">Cup or Cone?</label>
                    <div className="radio">
                        <input type="radio" id="cone" value="cone" name="vessel" />
                        <label htmlFor="cone" className="cone">Cone</label>
                    </div>
                    <div className="radio">
                        <input type="radio" id="cup" value="cup" name="vessel" />
                        <label htmlFor="cup" className="cup">Cup</label>
                    </div>
                </div> */}
                {/* <!-- CHECK  toppings, div checkboxes labels	 --> */}
                {/* <div className="toppings-flex">
                    <label>What toppings would you like?</label>
                    <div>
                        <input type="checkbox" id="topping1" name="ketchup" />
                        <label htmlFor="topping1">Ketchup</label>
                    </div>
                    <div>
                        <input type="checkbox" id="topping2" name="olives" />
                        <label htmlFor="topping2">Olives</label>
                    </div>
                    <div>
                        <input type="checkbox" id="topping3" name="jelly-beans" />
                        <label htmlFor="topping3">Jelly Beans</label>
                    </div>
                </div> */}
                {/* <!-- button place order, can also be an input tag with type submit : )  --> */}
                <button type="submit" id="submit-button">Place Order</button>
            </form>
        </>
    )
}

export default Form