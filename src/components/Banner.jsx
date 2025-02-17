import React, { useEffect, useState } from "react";
import "./Banner.css";

function Banner() {
    const [headerFijo, setHeaderFijo] = useState(false);
    const [cambioColor, setCambioColor] = useState(false);
    const [mostrarMenu, setMostrarMenu] = useState(false); // Nuevo estado para el menú hamburguesa

    useEffect(() => {
        const detectarScroll = () => {
            if (window.scrollY > 100) {
                setHeaderFijo(true);
                setMostrarMenu(true); 
            } else {
                setHeaderFijo(false);
                setMostrarMenu(false); 
            }

            if (window.scrollY > 950) {
                setCambioColor(true);
            } else {
                setCambioColor(false);
            }
        };

        window.addEventListener("scroll", detectarScroll);
        return () => window.removeEventListener("scroll", detectarScroll);
    }, []);

    return (
        <main className="banner-container">
            <header className={`header ${headerFijo ? "scrolled" : ""} ${cambioColor ? "fondo-cambiado" : ""}`}>
                <h1 className="banner-text">ANIA</h1>

                {/* Menú hamburguesa solo aparece cuando se hace scroll */}
                {mostrarMenu && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="menu-icon"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                )}

                {/* Enlaces solo aparecen en pantallas grandes */}
                <nav className={`enlaces ${headerFijo ? "visible" : "oculto"}`}>
                    <a className="espacios" href="productos">Productos</a>
                    <a className="espacios" href="Contacto">Contacto</a>
                    <a className="espacios" href="Nosotros">Nosotros</a>
                </nav>
            </header>
        </main>
    );
}

export default Banner;
