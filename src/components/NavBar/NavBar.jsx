import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logos/logo_blanco.svg"
import "./NavBar.css"

function NavBar() {
  return (
    // <Navbar expand="md" className="custom-navbar">
    //   <Container fluid className="navbar-container">
    //     {/* Botón hamburguesa (solo visible en mobile) */}
    //     <Navbar.Toggle aria-controls="offcanvasNavbar" className="uno" />
    //     {/* <Navbar.Toggle aria-controls="offcanvasNavbar" className="navbar-toggler-custom" /> */}

    //     {/* Logo (izquierda en desktop, centro en mobile) */}
        // <Navbar.Brand as={Link} to="/" className="dos">
        //     <img src={logo || "/placeholder.svg"} alt="Tienda Piola" className="logo-img" />
        // </Navbar.Brand>
    //     {/* <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
    //         <img src={logo || "/placeholder.svg"} alt="Tienda Piola" className="logo-img" />
    //     </Navbar.Brand> */}

    //     {/* Carrito (siempre visible a la derecha) */}
    //     <Link to="/cart" className="tres">
    //       <CartWidget />
    //     </Link>
    //     {/* <Link to="/cart" className="cart-link">
    //       <CartWidget />
    //     </Link> */}

    //   </Container>


    //     {/* Offcanvas que contiene la navegación */}
    //     <Navbar.Offcanvas
    //       id="offcanvasNavbar"
    //       aria-labelledby="offcanvasNavbarLabel"
    //       placement="start"
    //       className="cuatro offcanvas-custom"
    //     >
    //       <Offcanvas.Header closeButton className="offcanvas-header-custom">
    //         <Offcanvas.Title>
    //           <img src={logo || "/placeholder.svg"} alt="Tienda Piola" className="logo-img" />
    //         </Offcanvas.Title>
    //       </Offcanvas.Header>
    //       <Offcanvas.Body className="offcanvas-body-custom">
    //         <Nav className="nav-links-container">
            //   <Nav.Link as={Link} to="/" className="nav-link-unified">
            //     Inicio
            //   </Nav.Link>
            //   <Nav.Link as={Link} to="/products" className="nav-link-unified">
            //     Productos
            //   </Nav.Link>
            //   <Nav.Link as={Link} to="/nosotros" className="nav-link-unified">
            //     Nosotros
            //   </Nav.Link>
    //         </Nav>
    //       </Offcanvas.Body>
    //     </Navbar.Offcanvas>
    // </Navbar>


        <Navbar expand="md" className="custom-navbar">
            <Container fluid className="container-fluid">

                <Navbar.Toggle aria-controls="offcanvasNavbar" className="uno" />

                <Navbar.Brand as={Link} to="/" className="dos">
                    <img src={logo || "/placeholder.svg"} alt="Tienda Piola" className="logo-img" />
                </Navbar.Brand>

                <Navbar.Offcanvas id={`offcanvasNavbar-expand-`} aria-labelledby={`offcanvasNavbarLabel-expand-`} placement="start" className="tres">

                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-`}>
                            <logo />
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className="">
                            <Link as={Link} to="/" className="link1">
                            Inicio
                            </Link>

                            <Link as={Link} to="/products" className="link1">
                                Productos
                            </Link>

                            <Link as={Link} to="/nosotros" className="link1">
                                Nosotros
                            </Link>
                        </Nav>
                    </Offcanvas.Body>

                </Navbar.Offcanvas>

                <div to="/cart" className="cuatro">
                    <CartWidget />
                </div>

            </Container>

        </Navbar>

    )
}


export default NavBar
