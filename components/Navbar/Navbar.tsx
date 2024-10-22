import React from 'react';
import { Navbarelegido } from './Navbar-elegido';
import { IconHome, IconMail, IconFolder } from '@tabler/icons-react'; 

export const Navbar = () => {
    const navbar = [
        { url: "/", nombre: "Home", descripcion: "Página de inicio", icono: <IconHome /> },
        { url: "/contactos", nombre: "Contactos", descripcion: "Página de Contactos", icono: <IconMail/> },
        { url: "/proyectos", nombre: "Proyectos", descripcion: "Página de Proyectos", icono: <IconFolder />},
        { url: "/pokemones", nombre: "Pokemones", descripcion: "Página de Pokemones", icono: <IconFolder />},
    ];

    return (
        <nav className="w-full px-6">
            {
                navbar.map(nav => (
                    <Navbarelegido 
                        key={nav.nombre} 
                        url={nav.url} 
                        nombre={nav.nombre} 
                        descripcion={nav.descripcion} 
                        icono={nav.icono} 
                    />
                ))
            }
        </nav>
    );
};
