import { Link } from 'react-router-dom';
import './CartWidget.css';
// import cartIcon from '../../assets/cart.svg'; // Ruta al ícono

function CartWidget() {
    return (
        <Link to="/cart" className="cart-widget">
            {/* <img src={cartIcon} alt="Carrito" /> */}
            <span className="cart-count">SEXO0</span> {/* Después se conecta con Context */}
        </Link>
    );
}

export default CartWidget;
