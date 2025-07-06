import React, { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logos/logo_blanco.svg"
import "./NavBar.css"

function NavBar() {

        // 1. Define el estado para controlar la visibilidad del Offcanvas
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    // Funciones para manejar la apertura y cierre del Offcanvas
    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true);

    // Componente para tu Brand/Logo (reutilizable)
    // Se le pasa 'onClick' para que pueda cerrar el offcanvas si el logo está dentro
    const MyBrand = ({ onClick }) => (
        <Link to="/" className="navbar-brand-custom-logo" onClick={onClick}>
            <img src={logo || "/placeholder.svg"} alt="Tienda Piola" className="logo-img" />
        </Link>
    )

    return (
        <Navbar expand="md" className="custom-navbar">
            <Container fluid className="container-fluid">

                <Navbar.Toggle aria-controls="offcanvasNavbar" className="uno" onClick={handleShowOffcanvas} />

                <Navbar.Brand as={Link} to="/" className="dos">
                    <img src={logo || "/placeholder.svg"} alt="Tienda Piola" className="logo-img" />
                </Navbar.Brand>

                <Navbar.Offcanvas id={`offcanvasNavbar-expand-`} aria-labelledby={`offcanvasNavbarLabel-expand-`} placement="start" className="tres" show={showOffcanvas}
                    onHide={handleCloseOffcanvas}>

                    <Offcanvas.Header closeButton className='offcanvas-header'>

                        {/* <button type="button" class="btn-close" aria-label="Close"></button> */}

                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-`} onClick={handleCloseOffcanvas} className='chota'>
                            <img src={logo || "/placeholder.svg"} alt="Tienda Piola" className="logo-img img-header-menu" />
                        </Offcanvas.Title>

                    </Offcanvas.Header>


                    <Offcanvas.Body className="offcanvas-body">
                        
                            <Link as={Link} to="/" className="link1" onClick={handleCloseOffcanvas}>
                            Inicio
                            </Link>

                            <Link as={Link} to="/products" className="link1" onClick={handleCloseOffcanvas}>
                                Productos
                            </Link>

                            <Link as={Link} to="/info" className="link1" onClick={handleCloseOffcanvas}>
                                Nosotros
                            </Link>

                    </Offcanvas.Body>

                </Navbar.Offcanvas>

                {/* <div to="/cart" className="cuatro">
                    
                </div> */}

                <div className="cuatro">
                    <CartWidget />
                </div>

            </Container>
        </Navbar>
    )
}


export default NavBar
