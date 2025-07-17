// ItemListContainer.jsx
import React, { useState, useEffect } from "react";
import { Offcanvas, Form, Container, Row, Col } from 'react-bootstrap'; // Importamos Row y Col
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
    // Estados para controlar la visibilidad de los Offcanvas de ordenar y filtrar
    const [showSortOffcanvas, setShowSortOffcanvas] = useState(false);
    const [showFilterOffcanvas, setShowFilterOffcanvas] = useState(false);

    // Estados para manejar las opciones de ordenamiento y filtro
    const [selectedSortOption, setSelectedSortOption] = useState('priceLowHigh');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState(500); // Valor inicial para el slider

    // Funciones para abrir/cerrar los Offcanvas
    const handleCloseSort = () => setShowSortOffcanvas(false);
    const handleShowSort = () => setShowSortOffcanvas(true);

    const handleCloseFilter = () => setShowFilterOffcanvas(false);
    const handleShowFilter = () => setShowFilterOffcanvas(true);

    // Funciones para manejar los cambios en los formularios de ordenar y filtrar
    const handleSortChange = (event) => {
        setSelectedSortOption(event.target.value);
        console.log("Ordenando por:", event.target.value);
        // Aquí podrías disparar una función para aplicar el ordenamiento a tus productos
    };

    const handleCategoryChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedCategories([...selectedCategories, value]);
        } else {
            setSelectedCategories(selectedCategories.filter(category => category !== value));
        }
        console.log("Categorías seleccionadas:", selectedCategories);
    };

    const handlePriceRangeChange = (event) => {
        setPriceRange(event.target.value);
        console.log("Rango de precio seleccionado:", event.target.value);
    };

    // Funciones para aplicar o limpiar filtros
    const applyFilters = () => {
        console.log("Aplicando filtros:", { selectedCategories, priceRange });
        // Lógica para aplicar los filtros a tus productos
        handleCloseFilter(); // Cierra el offcanvas después de aplicar
    };

    const clearFilters = () => {
        setSelectedCategories([]);
        setPriceRange(500); // Reinicia el slider
        console.log("Filtros limpiados.");
        // Lógica para limpiar los filtros de tus productos
        // Opcional: handleCloseFilter(); // Cierra el offcanvas
    };

    // --- Tu lógica existente para cargar productos desde la API ---
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://api-ten-jet.vercel.app/products");
                if (!response.ok) {
                    throw new Error("Error al cargar los productos");
                }
                const data = await response.json();
                setProducts(data);

            } catch (error) {
                setError(error.message);
            }
        };
        fetchProducts();
    }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente

    // Aquí podrías agregar lógica para filtrar y ordenar los 'products'
    // basándote en 'selectedSortOption', 'selectedCategories', 'priceRange'
    // Por ejemplo, una función `getFilteredAndSortedProducts` que retorne una nueva lista.

    return (
        <section className='main-content'>
            {/* Contenedor para los botones de offcanvas (VISIBLES SOLO EN MÓVILES) */}
            <Container fluid className="container-filters d-md-none">

                {/* Botón para abrir el offcanvas de Ordenar */}
                <button className="btn-custom btn-primary-" onClick={handleShowSort}>
                    <i className="bi bi-arrow-down-up"></i>
                    Ordenar
                </button>

                {/* Botón para abrir el offcanvas de Filtrar */}
                <button className="btn-custom" onClick={handleShowFilter}>
                    <i className="bi bi-sliders"></i>
                    Filtrar
                </button>

            </Container>

            {/* Offcanvas para Ordenar (VISIBLE SOLO EN MÓVILES) */}
            <Offcanvas show={showSortOffcanvas} onHide={handleCloseSort} placement="start" className="d-md-none">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Ordenar Productos</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>Seleccioná cómo querés ordenar los productos:</p>
                    {/* djjdjdd */}
                    <Form>
                        <Form.Check
                            type="radio"
                            id="sortPriceLowHigh"
                            label="Precio: Menor a Mayor"
                            name="sortOptions"
                            value="priceLowHigh"
                            checked={selectedSortOption === 'priceLowHigh'}
                            onChange={handleSortChange}
                            className="mb-2"
                        />
                        <Form.Check
                            type="radio"
                            id="sortPriceHighLow"
                            label="Precio: Mayor a Menor"
                            name="sortOptions"
                            value="priceHighLow"
                            checked={selectedSortOption === 'priceHighLow'}
                            onChange={handleSortChange}
                            className="mb-2"
                        />
                        <Form.Check
                            type="radio"
                            id="sortNewest"
                            label="Más Novedosos"
                            name="sortOptions"
                            value="newest"
                            checked={selectedSortOption === 'newest'}
                            onChange={handleSortChange}
                            className="mb-2"
                        />
                        <Form.Check
                            type="radio"
                            id="sortPopularity"
                            label="Más Populares"
                            name="sortOptions"
                            value="popularity"
                            checked={selectedSortOption === 'popularity'}
                            onChange={handleSortChange}
                            className="mb-2"
                        />
                        <hr className="my-4" />
                        {/* <Button variant="primary" className="w-100" onClick={handleCloseSort}>Aplicar Orden</Button> */}
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>

            {/* Offcanvas para Filtrar (VISIBLE SOLO EN MÓVILES) */}
            {/* className="d-md-none" */}
            <Offcanvas show={showFilterOffcanvas} onHide={handleCloseFilter} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filtrar Productos</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>Ajustá los filtros para encontrar lo que buscás:</p>

                    <h6 className="mt-3">Categorías</h6>
                    <Form>
                        <Form.Check
                            type="checkbox"
                            id="categoryElectronics"
                            label="Electrónica"
                            value="electronics"
                            checked={selectedCategories.includes('electronics')}
                            onChange={handleCategoryChange}
                            className="mb-2"
                        />
                        <Form.Check
                            type="checkbox"
                            id="categoryClothing"
                            label="Ropa"
                            value="clothing"
                            checked={selectedCategories.includes('clothing')}
                            onChange={handleCategoryChange}
                            className="mb-2"
                        />
                        <Form.Check
                            type="checkbox"
                            id="categoryHome"
                            label="Hogar"
                            value="home"
                            checked={selectedCategories.includes('home')}
                            onChange={handleCategoryChange}
                            className="mb-2"
                        />
                        <Form.Check
                            type="checkbox"
                            id="categoryBooks"
                            label="Libros"
                            value="books"
                            checked={selectedCategories.includes('books')}
                            onChange={handleCategoryChange}
                            className="mb-2"
                        />
                    </Form>

                    <h6 className="mt-4">Rango de Precio</h6>
                    <Form.Label htmlFor="priceRange">Precio: ${priceRange}</Form.Label>
                    <Form.Range
                        min="0"
                        max="1000"
                        step="50"
                        value={priceRange}
                        onChange={handlePriceRangeChange}
                        id="priceRange"
                    />
                    <div className="d-flex justify-content-between">
                        <span>$0</span>
                        <span>$1000+</span>
                    </div>

                    {/* <hr className="my-4" />
                    <Button variant="primary" className="w-100" onClick={applyFilters}>Aplicar Filtros</Button>
                    <Button variant="outline-secondary" className="w-100 mt-2" onClick={clearFilters}>Limpiar Filtros</Button> */}
                </Offcanvas.Body>
            </Offcanvas>

            {/* --- Contenido principal con Sidebar de Filtros/Ordenamiento para Desktop --- */}
            {/* Esta sección es visible en desktop y oculta en mobile */}
            {/* <Container className="d-none d-md-block main-content-desktop-wrapper"> */}
            

            {/* Contenido de productos para MOBILE (visible solo en mobile) */}
            {/* Esta sección se mostrará en mobile, mientras que la de desktop estará oculta */}
            <div className="godeano d-md-none">
                <main className='collections-mobile'>
                    <h2 className="mb-4 text-center">TODAS LAS COLECCIONES</h2>
                    <div id='container-grid'> {/* Reutilizamos el mismo ID para el grid */}
                        {error ? (
                            <p className="error-message">{error}</p>
                        ) : (
                            products.map((product) =>
                                <Link to="#" className="card" key={product.id}>
                                    <img src={product.image} alt={product.nombre} className="product-image" />
                                    <div className="card-content">
                                        <h3 className="card-title">{product.nombre}</h3>
                                        <p className="card-price">${product.price}</p>
                                    </div>
                                </Link>
                            )
                        )}
                    </div>
                </main>
            </div>

        </section>
    );
};

export default ItemListContainer;