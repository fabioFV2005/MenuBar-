import { useState } from 'react';
import './MenuBar.css';

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Inicio');

  const menuItems = [
    { name: 'Inicio', icon: '🏠' },
    { name: 'Contenido', icon: '📚' },
    { name: 'Servicios', icon: '⚡' },
    { name: 'Contactos', icon: '📧' },
    { name: 'Acerca de', icon: 'ℹ️' }
  ];

  const handleMenuClick = (itemName) => {
    setActiveSection(itemName);
    setIsOpen(false);
  };

  return (
    <nav className="menubar">
      <div className="menubar-container">
        <div className="menubar-logo">
          <span className="logo-icon">✨</span>
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
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
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
