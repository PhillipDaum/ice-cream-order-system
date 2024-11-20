import './Nav.css'

function Nav() {


    return (
        <>
            <header>
                <h1>Ice Cream Shop</h1>
                {/* <div className="burger">
                    <button className="burger-button">
                        <i className="fa fa-bars"></i>
                    </button>
                </div> */}
                <nav>
                    <ul className="nav">
                        {/* these will be the react router stuff */}
                        <li>Orders</li>
                        <li>
                            <Link to="/kitchen">Kitchen</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="/Kitchen" element={<Kitchen />} />
                </Routes>
            </header>
        </>
    )
}

export default Nav