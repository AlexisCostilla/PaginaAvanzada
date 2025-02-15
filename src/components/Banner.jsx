import React, { useEffect, useState } from "react";
import "./Banner.css";

function Banner() {
    const [headerFijo, setHeaderFijo] = useState(false);
    const [cambioColor, setCambioColor] = useState(false); // Nuevo estado para el cambio de fondo

    useEffect(() => {
        const detectarScroll = () => {
            if (window.scrollY > 100) {
                setHeaderFijo(true);
            } else {
                setHeaderFijo(false);
            }

            if (window.scrollY > 950) { // Cuando el scroll supere los 150px
                setCambioColor(true); // Cambiar el fondo
            } else {
                setCambioColor(false); // Restaurar el fondo original
            }
        };

        window.addEventListener("scroll", detectarScroll);
        return () => window.removeEventListener("scroll", detectarScroll);
    }, []);

    return (
        <main className="banner-container">
            <header className={`header ${headerFijo ? "scrolled" : ""} ${cambioColor ? "fondo-cambiado" : ""}`}>
                <h1 className="banner-text">ANIA</h1>
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
