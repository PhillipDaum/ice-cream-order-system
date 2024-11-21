import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {


    return (
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
                    <li>
                        <Link to="/">Order Form</Link>
                    </li>
                    <li>
                        <Link to="/order-queue">Order Queue</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav