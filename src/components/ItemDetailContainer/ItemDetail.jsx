import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import './ItemDetail.css';

// import TextilProducts from "../../data/products";
import { db } from '../../firebase/config'; // Importa la instancia de db
import { doc, getDoc } from 'firebase/firestore'; // Funciones para obtener un solo documento


function ItemDetail() {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true); // Para mostrar "cargando..."
    const [error, setError] = useState(null);   // Para manejar errores
    const { itemId } = useParams(); // Obtiene el ID del producto de la URL

    useEffect(() => {
        setLoading(true); // Indicar que la carga ha comenzado
        setError(null);   // Limpiar cualquier error previo

        // Paso A: Crear una referencia a un documento específico en la colección 'products'
        const docRef = doc(db, 'products', itemId); // 'products' es el nombre de tu colección en Firestore

        // Paso B: Obtener el documento
        getDoc(docRef)
            .then((resp) => {
                if (resp.exists()) { // Verifica si el documento existe
                    setItem({
                        id: resp.id, // ¡Importante! El ID del documento de Firestore
                        ...resp.data(), // El resto de los datos del producto
                    });
                } else {
                    // Si el documento no existe (ej. ID incorrecto en la URL)
                    setError("Producto no encontrado.");
                    setItem(null); // Asegura que no haya item
                }
            })
            .catch((err) => {
                console.error("Error al cargar el detalle del producto:", err);
                setError("No pudimos cargar el detalle del producto. Intenta de nuevo más tarde.");
            })
            .finally(() => {
                setLoading(false); // Indicar que la carga ha terminado
            });
    }, [itemId]); // Dependencia: el efecto se ejecuta cada vez que itemId cambie

    // Muestra mensajes de carga/error antes de renderizar el detalle
    if (loading) {
        return <p className="loading-message-detail">Cargando detalle del producto...</p>;
    }

    if (error) {
        return <p className="error-message-detail">{error}</p>;
    }

    if (!item) {
        // Esto ocurre si el producto no se encontró y no hubo un error en la red.
        return <p className="no-product-found">El producto solicitado no existe.</p>;
    }

    // Si el item se cargó correctamente, muestra su detalle
    return (
        <div className="item-detail-container">
            <img src={item.image} alt={item.name} className="item-detail-image" />
            <div className="item-detail-info">
                <h2 className="item-detail-name">{item.name}</h2>
                <p className="item-detail-description">{item.description}</p>
                <p className="item-detail-price">Precio: ${item.price}</p>
                <p className="item-detail-category">Categoría: {item.category}</p>
                {/* Aquí puedes añadir botones como "Agregar al carrito" */}
            </div>
        </div>
    );
}


// function Detail() {

//     const { id } = useParams();
//     console.log("ID desde URL:", id);
//     console.log("Productos:", TextilProducts);

//     const product = TextilProducts.find(prod => prod.id == id); // importante: usar ==

//     if (!product) {
//     return <h2>El producto seleccionado no existe</h2>;
//     }

//     return (
//         <div>
//             <h2>Detalles del producto</h2>
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <h4>Precio: ${product.price}</h4>
//         </div>
//     );
// }

export default ItemDetail;
