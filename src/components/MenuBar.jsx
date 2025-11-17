import { useState } from 'react';
import './MenuBar.css';

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Inicio');

  const menuItems = [
    { name: 'Inicio' },
    { name: 'Contenido' },
    { name: 'Servicios' },
    { name: 'Contactos' },
    { name: 'Acerca de' }
  ];

  const handleMenuClick = (itemName) => {
    setActiveSection(itemName);
    setIsOpen(false);
  };

  return (
    <nav className="menubar">
      <div className="menubar-container">
        <div className="menubar-logo">
          <span className="logo-text">TuMarca</span>
        </div>

        <ul className={`menubar-nav ${isOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.name.toLowerCase()}`}
                className={`nav-link ${activeSection === item.name ? 'active' : ''}`}
                onClick={() => handleMenuClick(item.name)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button 
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default MenuBar;
