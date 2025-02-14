import React, { useEffect, useState } from "react";
import "./Banner.css";

function Banner() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="banner-container">
            <header className={`header ${isScrolled ? "scrolled" : ""}`}>
                <h1 className="banner-text">ANIA</h1>
            </header>
        </main>
    );
}

export default Banner;
