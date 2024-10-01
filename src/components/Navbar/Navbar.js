import './Navbar.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Menú desplegable
import { Menubar } from 'primereact/menubar';

function Navbar() {
    // Constante para manejar navegación de rutas
    const navigate = useNavigate();

    // Items de menú
    const items = [
        {
            label: 'Home', icon: 'pi pi-fw pi-home', command: () => { navigate('/') }
        },
        {
            label: 'Popular', icon: 'pi pi-heart', command: () => { navigate('/popular') }
        },
        // Menú desplegable -> categorías de instrumentos
        {
            label: 'Instrumentos', icon: 'pi pi-bars', items: [
                {
                    label: 'Instrumentos de aire', className: 'i-menu-desplegable', command: () => { navigate('/categoria') }
                },
                {
                    label: 'Instrumendos de cuerda', className: 'i-menu-desplegable', command: () => { navigate('/categoria') }
                },
                {
                    label: 'Instrumentos de percusión', className: 'i-menu-desplegable', command: () => { navigate('/categoria') }
                },
                {
                    label: 'Instrumentos Midli', className: 'i-menu-desplegable', command: () => { navigate('/categoria') }
                }
            ]
        },
    ];

    return (
        <div className="navbar">
            <Menubar model={items} />
        </div>
    )
}

export default Navbar;