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