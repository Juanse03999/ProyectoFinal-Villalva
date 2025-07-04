import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.jsx';
import "./Layout.css"

function Layout() {
    return (
        <>
            <div>
                <NavBar />

                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default Layout;


// function Layout() {
//     return (

//         <>
//             {/* <div className='air'>
//                 <Link to={"/"}><img className='navbar-logo' src={Logo} alt='Logo de la página'/></Link>
//             </div> */}

//             <nav>
//                 <ul>

//                     {/* <Link to={"/"}><img className='navbar-logo_blanco' src={LogoBlanco} alt='Logo de la página'/></Link> */}

//                     <li>
//                         <Link className='nav_link' to={"/"}>Home</Link>
//                     </li>

//                     <li>
//                         <Link className='nav_link' to={"/Products"}>Productos</Link>
//                     </li>

//                     <li>
//                         <Link className='nav_link' to={"/Info"}>Nosotros</Link>
//                     </li>
//                 </ul>
//             </nav>
//             <Outlet/>


//         </>
        
//     )
// }

// export default Layout