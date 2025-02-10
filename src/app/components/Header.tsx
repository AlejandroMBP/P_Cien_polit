// app/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header-bar text-white p-4">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <img className="logo-carrera" src="/images/descargar.jpg" alt="Logo Carrera" />
                    <h1 className="m-0 text-center flex-grow-1">PSICOLOGIA</h1>
                    <nav>
                        <ul className="d-flex list-unstyled m-0">
                            <li className="ms-4">
                                <a href="#section1" className="text-white">Inicio</a>
                            </li>
                            <li className="ms-4 subMenu">
                                <a href="#section1" className="text-white">Sobre la Carrera</a>
                            </li>
                            <li className="ms-4 subMenu">
                                <a href="#section1" className="text-white">Ofertas Academicas</a>
                            </li>
                            <li className="ms-4 subMenu">
                                <a href="#section1" className="text-white">Kardex</a>
                            </li>
                            <li className="ms-4 subMenu">
                                <a href="#section1" className="text-white">Acreaditacion</a>
                            </li>
                            <li className="ms-4 subMenu">
                                <a href="#section1" className="text-white">Links</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
