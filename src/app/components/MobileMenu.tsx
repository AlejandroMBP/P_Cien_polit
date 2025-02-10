"use client";

import React, { useState } from "react";

const MobileMenu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="mobile-menu">
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="#section1">Inicio</a></li>
                    <li className="dropdown">
                        <a href="#">Sobre la carrera</a>
                        <ul className="submenu">
                            <li><a href="#">Misión</a></li>
                            <li><a href="#">Visión</a></li>
                            <li><a href="#">Objetivos</a></li>
                            <li><a href="#">Antecedentes Históricos</a></li>
                        </ul>
                    </li>
                    <li><a href="#section2">Servicios</a></li>
                    <li><a href="#section3">Contacto</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default MobileMenu;
