import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    if(cantidadTotal === 0 ) {
        return (
            <>
                <h2>TU CARRITO ESTÁ VACIO!!! </h2>
                <Link to="/"> Ver el listado de productos </Link>
            </>
        )
    }

  return (
    <div>
        {
            carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
        }
        <h3>Total: $ {total} </h3>
        <h3>Cantidad Total: {cantidadTotal} </h3>
        <button onClick={()=> vaciarCarrito()}> Vaciar Carrito</button>
        <Link to="/checkout"> Finalizar tu compra </Link>
    </div>
  )
}

export default Cart