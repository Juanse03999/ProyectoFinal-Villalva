// import React, { useState, useEffect } from 'react';
// // import { useEffect, useState } from "react";
// import ItemList from "./ItemList";
// import { useParams } from 'react-router-dom';
// // import TextilProducts from "../../data/products"
// import "./ItemListContainer.css"

// import { db } from '../../firebase/config'; // Importa la instancia de db
// import { collection, getDocs, query, where } from 'firebase/firestore'; // Funciones de Firestore

// function ItemListContainer() {
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true); // Para mostrar "cargando..."
//     const [error, setError] = useState(null);   // Para manejar errores
//     const { categoryId } = useParams(); // Para filtrar por categoría desde la URL

//     useEffect(() => {
//         setLoading(true); // Indicar que la carga ha comenzado
//         setError(null);   // Limpiar cualquier error previo

//         // Paso A: Crear una referencia a la colección 'products' en Firestore
//         const camisasRef = collection(db, 'camisas');

//         // Paso B: Definir la consulta
//         // Si hay un categoryId en la URL, filtramos por categoría
//         const q = categoryId
//             ? query(camisasRef, where('category', '==', categoryId))
//             : camisasRef; // Si no hay categoryId, traemos todos los productos

//         // Paso C: Obtener los documentos de Firestore
//         getDocs(q)
//             .then((resp) => {
//                 // Mapear la respuesta de Firestore para obtener solo los datos que necesitamos
//                 const newItems = resp.docs.map((doc) => {
//                     return {
//                         id: doc.id, // ¡Importante! El ID del documento de Firestore
//                         ...doc.data(), // El resto de los datos del producto (name, price, image, category, etc.)
//                     };
//                 });
//                 setItems(newItems); // Actualizar el estado con los productos obtenidos
//             })
//             .catch((err) => {
//                 console.error("Error al cargar los productos:", err);
//                 setError("No pudimos cargar los productos. Intenta de nuevo más tarde.");
//             })
//             .finally(() => {
//                 setLoading(false); // Indicar que la carga ha terminado
//             });
//     }, [categoryId]); // Dependencia: el efecto se ejecuta cada vez que categoryId cambie

//     return (
//         <div className="item-list-container">
//             {loading && <p className="loading-message">Cargando productos...</p>} {/* Muestra mensaje de carga */}
//             {error && <p className="error-message">{error}</p>} {/* Muestra mensaje de error */}
//             {!loading && !error && <ItemList items={items} />} {/* Muestra los productos solo si no hay carga ni error */}
//         </div>
//     );
// }

// export default ItemListContainer






import { Container, Nav, Navbar, Offcanvas, Dropdown } from "react-bootstrap"

import { Link } from 'react-router-dom';
import { useState, useEffect } from "react"

const ItemListContainer = () => {

        // 1. Define el estado para controlar la visibilidad del Offcanvas
        const [showOffcanvas, setShowOffcanvas] = useState(false);
    
        // Funciones para manejar la apertura y cierre del Offcanvas
        const handleCloseOffcanvas = () => setShowOffcanvas(false);
        const handleShowOffcanvas = () => setShowOffcanvas(true);


    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch ("https://api-ten-jet.vercel.app/products")
                if (!response.ok) {
                    throw new Error("Error al cargar los productos")
                }
                const data = await response.json()
                setProducts(data)

            } catch (error) {
                setError(error.message)
            }
        }
        fetchProducts()
    }, [])


    return (
        
        <section className='main-content'>

            <Navbar expand="md" className="filter-btn">
            {/* <Container fluid className="container-fluid"> */}


                <p aria-controls="offcanvasNavbar" onClick={handleShowOffcanvas} className="hhh">Ordenar</p>

                <Navbar.Offcanvas id={`offcanvasNavbar-expand-`} aria-labelledby={`offcanvasNavbarLabel-expand-`} placement="start" className="tres" show={showOffcanvas}
                    onHide={handleCloseOffcanvas}>

                    <Offcanvas.Header closeButton className='offcanvas-header'>

                        {/* <button type="button" class="btn-close" aria-label="Close"></button> */}


                    </Offcanvas.Header>


                    <Offcanvas.Body className="offcanvas-body">
                        
                        <Link as={Link} to="/" className="links" onClick={handleCloseOffcanvas}>
                        Inicio
                        </Link>

                        <Link as={Link} to="/products" className="links" onClick={handleCloseOffcanvas}>
                            Productos
                        </Link>

                        <Link as={Link} to="/info" className="links" onClick={handleCloseOffcanvas}>
                            Nosotros
                        </Link>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </Offcanvas.Body>

                    <div className='offcanvas-footer'>

                        <Link as={Link} to="/info" className="links links-login" onClick={handleCloseOffcanvas}>
                            Iniciar Sesión / Crear Cuenta
                        </Link>
                    </div>

                    {/* <Offcanvas.Footer className="offcanvas-footer">
                        <div></div>

                    </Offcanvas.Footer> */}

                </Navbar.Offcanvas>


            {/* </Container> */}
        </Navbar>











            <aside className='filters'>
                <h2>Filtros</h2>
                <div className='filters-category'>
                    <div className="filter-category">
                        <h3>Categorias</h3>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <span>Hombres</span>
                        </label>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <span>Mujeres</span>
                        </label>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <span>Niños</span>
                        </label>
                    </div>

                    <div className="filter-type">
                        <h3>Tipos</h3>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <span>Camisas</span>
                        </label>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <span>Pantalones</span>
                        </label>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <span>Zapatillas</span>
                        </label>
                    </div>
                </div>
            </aside>
            <main className='collections'>
                <div className="options">
                    <h2>TODAS LAS COLECCIONES</h2>
                    <div className="sort-options">
                        <label>
                            Ordenar por:
                            <select>
                                <option>Relevante</option>
                                <option>Precio: Menor a Mayor</option>
                                <option>Precio: Mayor a Menor</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div id='container-grid'>
                    {error ? (
                        <p className="error-message">{error}</p>
                    ):(
                        products.map((product) =>
                            <Link to="#" className="card" key={product.id}>
                                <img src={product.image} alt={product.image} className="product-image" />
                                <div className="card-content">
                                    <h3 className="card-title">{product.nombre}</h3>
                                    {/* <p className="card-description">{product.descripcion}</p> */}
                                    <p className="card-price">${product.price}</p>
                                </div>
                            </Link>

                        )
                    )}
                </div>
                
            </main>

        </section>
    )
}

export default ItemListContainer