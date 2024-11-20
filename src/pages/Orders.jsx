import Form from "../components/Form"

// import the stack of orders
function Orders({handleChange, handleSubmit, formData}) {

    return (
        <>
            <div className="form-container">
                <h2>Place your ice cream order!</h2>
                <Form handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />
            </div>
        </>
    )
}

export default Orders
