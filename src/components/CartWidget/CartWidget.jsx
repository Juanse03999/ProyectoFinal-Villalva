import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './CartWidget.css';

function CartWidget() {
    return (
        <div>
            <Link as={Link} to="/Cart" className="cart-icon-container">
                <i class="bi bi-cart2 icon-cart">
                    <span className="cart-count">0</span>
                </i>
            </Link>
        </div>

    );
}

export default CartWidget;
