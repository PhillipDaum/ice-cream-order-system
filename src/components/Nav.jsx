import { Link } from 'react-router-dom';
import './Nav.css'

const toggleSideMenu = () => {
    document.querySelector(".open-menu").classList.toggle("hide");
    document.querySelector(".close-menu").classList.toggle("show");
    document.querySelector(".changing-nav").classList.toggle("show");
}

function Nav() {
    return (
        <header>
            <h1>Ice Cream Shop</h1>
            {/* hidden on desktop */}
            <div className="hamburger-menu" onClick={toggleSideMenu}>
                <img className="open-menu" src="./src/assets/hamburger-menu.svg" alt="three vertical bars button to reveal navigation menu" />
                <img className="close-menu" src="./src/assets/close-burger.svg" alt=" X button to hide navigation menu" />
            </div>
            <nav className='changing-nav'>
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