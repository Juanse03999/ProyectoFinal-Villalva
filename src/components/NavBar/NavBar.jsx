import React, { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas, Dropdown } from "react-bootstrap"
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
