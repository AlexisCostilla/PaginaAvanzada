import React from "react";
import "./horarios.css";

function Horarios() {
    return (
        <section className="conteiner-horarios">
            <div className="horarios">
                <h2>HORARIOS</h2>
                <p>De lunes a viernes de 9 a 18 hs</p>
            </div>

            <div className="redes">
                <h2>REDES SOCIALES</h2>
                <a href="https://www.instagram.com/cc.sportgym/" target="_blank" rel="noopener noreferrer" className="instagram-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M16.5 7.5v.01" />
                    </svg>

                </a>
            </div>

            <div className="mapa">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.9682438658124!2d-58.380300087511735!3d-34.756392765466245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd353dc8fd33b%3A0xabbab7d115a27d4!2sCc%20Gym!5e0!3m2!1ses-419!2sar!4v1742623252589!5m2!1ses-419!2sar"
                    title="Mapa Ubicación"
                ></iframe>
            </div>
        </section>
    );
}

export default Horarios;
