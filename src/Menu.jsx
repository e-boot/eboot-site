import { useState } from 'react';
import './Menu.css';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="menu-container">
            <div className="menu-logo">eboot</div>
            
            {/* Hamburger Menu Button */}
            <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Navigation Links */}
            <div className={`menu-items ${isOpen ? 'active' : ''}`}>
                <a href="#home" onClick={toggleMenu}>Home</a>
                <a href="#about" onClick={toggleMenu}>About</a>
                <a href="#projects" onClick={toggleMenu}>Projects</a>
                <a href="#contact" onClick={toggleMenu}>Contact</a>
            </div>
        </nav>
    );
};

export default Menu;
