import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {

    return (
        <header>
            <h1>Ice Cream Shop</h1>
            <nav>
                <ul>
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