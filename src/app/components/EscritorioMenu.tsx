"use client";

import React from "react";

const DesktopMenu: React.FC = () => {
    return (
        <nav className="nav-menu desktop-menu">
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
    );
};

export default DesktopMenu;
