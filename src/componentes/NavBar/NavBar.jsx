import { Link,NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <Link to="/">
            <h1>Mi PetShop</h1>
        </Link>

        <nav>
            <ul>
            <li><NavLink to="/categoria/1">Alimentos</NavLink></li>
            <li><NavLink to="/categoria/2">Perros</NavLink></li>
            <li><NavLink to="/categoria/3">Gatos</NavLink></li>
            <li><NavLink to="/categoria/4">Otros</NavLink></li>
            <li><NavLink to="/categoria/5">Juguetes</NavLink></li>
            <li><NavLink to="/categoria/6">Veterinarios</NavLink></li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
)
}

export default NavBar