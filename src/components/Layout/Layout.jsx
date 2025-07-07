import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.jsx';
import "./Layout.css"

function Layout() {
    return (
        <>
            <div className='app-container'>

                <header>
                    <NavBar />
                </header>

                <Outlet /> {/* Main */}

                <footer>

                </footer>


            </div>
        </>
    );
}

export default Layout;