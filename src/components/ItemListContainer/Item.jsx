import { Link } from 'react-router-dom';
import './ItemListContainer.css';

const Item = ({ category, image, id, name, description, price }) => {
    const imgSrc = `/images/${category}/${image}`; // ✅ Simple, directo, y funciona
    console.log("Cargando imagen desde:", `/images/${category}/${image}`);

    return (
        <Link to={`/producto/${id}`} className="card">
            <img src={imgSrc} alt={name} />
            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">${price}</p>
            </div>
        </Link>
    )
}

export default Item;